import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Post } from '../../posts/entities/post.entity';
export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop({ default: () => new Date().getTime().toString() }) // Geração do ID automático usando o timestamp
  id: string;

  @Prop()
  user: string;

  @Prop()
  comment: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
