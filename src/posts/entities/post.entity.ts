/* eslint-disable */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Comment } from '../../comments/entities/comment.entity';

export type PostDocument = Post & Document;

@Schema()
export class Post {
  @Prop()
  user: string;

  @Prop()
  post_date: string;

  @Prop()
  description: string;

  @Prop()
  likes: number;

  @Prop()
  url_image?: string;

  @Prop({ type: [{ user: String, comment: String }], required: false})
  comments?: { user: string; comment: string }[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
