import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Post, PostSchema } from './entities/post.entity';
import { Comment, CommentSchema } from '../comments/entities/comment.entity'; // Importe o Comment e CommentSchema

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Post.name, schema: PostSchema },
      { name: Comment.name, schema: CommentSchema }, // Adicione o Comment e CommentSchema ao MongooseModule.forFeature
    ]),
  ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
