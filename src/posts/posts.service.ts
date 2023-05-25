import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Model } from 'mongoose';
import { PostDocument, Post } from './entities/post.entity';
import { CreateCommentDto } from 'src/comments/dto/create-comment.dto';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

  create(createPostDto: CreatePostDto) {
    const post = new this.postModel(createPostDto);
    return post.save();
  }

  findAll() {
    return this.postModel.find();
  }

  findOne(id: string) {
    return this.postModel.findById(id);
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.postModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updatePostDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.postModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }

  getPostComments(postId: string) {
    return this.postModel.findById(postId).select('comments');
  }

  getComment(postId: string, commentId: string) {
    return this.postModel.findOne(
      { _id: postId, 'comments._id': commentId },
      { 'comments.$': 1 },
    );
  }

  addComment(postId: string, createCommentDto: CreateCommentDto) {
    const { user, comment } = createCommentDto;
    const commentToAdd = { user, comment };

    return this.postModel.findByIdAndUpdate(
      postId,
      { $push: { comments: commentToAdd } },
      { new: true },
    );
  }

  removeComment(postId: string, commentId: string) {
    return this.postModel
      .findByIdAndUpdate(
        postId,
        { $pull: { comments: { _id: commentId } } },
        { new: true },
      )
      .populate('comments');
  }

  updateComment(postId: string, commentId: string, updatedComment: string) {
    return this.postModel.findOneAndUpdate(
      { _id: postId, 'comments._id': commentId },
      { $set: { 'comments.$.comment': updatedComment } },
      { new: true },
    );
  }
}
