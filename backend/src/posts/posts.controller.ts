import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CreateCommentDto } from '../comments/dto/create-comment.dto';
import { UpdateCommentDto } from '../comments/dto/update-comment.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }

  @Get(':id/comments')
  getPostComments(@Param('id') postId: string) {
    return this.postsService.getPostComments(postId);
  }

  @Get(':postId/comments/:commentId')
  getComment(
    @Param('postId') postId: string,
    @Param('commentId') commentId: string,
  ) {
    return this.postsService.getComment(postId, commentId);
  }

  @Post(':postId/comments')
  addComment(
    @Param('postId') postId: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.postsService.addComment(postId, createCommentDto);
  }

  @Delete(':postId/comments/:commentId')
  removeComment(
    @Param('postId') postId: string,
    @Param('commentId') commentId: string,
  ) {
    return this.postsService.removeComment(postId, commentId);
  }

  @Put(':postId/comments/:commentId')
  updateComment(
    @Param('postId') postId: string,
    @Param('commentId') commentId: string,
    @Body('comment') updatedComment: string, // Apenas o campo "comment" é passado no corpo da requisição
  ) {
    return this.postsService.updateComment(postId, commentId, updatedComment);
  }
}
