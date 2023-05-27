import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import mongoose, { Model } from 'mongoose';
import { UsersModule } from './users.module';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto) {
    const user = new this.userModel({
      ...createUserDto,
      _id: new mongoose.Types.ObjectId().toHexString(),
    });
    user.password = await bcrypt.hash(createUserDto.password, 10);
    return user.save();
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(
      id,
      {
        $set: updateUserDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.userModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
  async findByUser(user: string) {
    const foundUser = await this.userModel.findOne({ user });
    console.log('IDdd');

    console.log(foundUser); // Verifica o usuário retornado pela consulta

    return foundUser;
  }
}
