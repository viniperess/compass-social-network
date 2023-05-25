import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

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

  @Prop()
  comments?: [];
}

export const PostSchema = SchemaFactory.createForClass(Post);
