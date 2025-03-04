import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ default: Types.ObjectId })
  _id: Types.ObjectId;

  @Prop()
  name: string;

  @Prop({ unique: true, required: true })
  user: string;

  @Prop()
  birthdate: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  profile_photo: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
