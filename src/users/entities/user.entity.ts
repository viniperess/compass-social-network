import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  user: string;

  @Prop()
  birthdate: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  profile_photo: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
