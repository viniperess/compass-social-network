import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/entities/user.entity';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(user: User): Promise<UserToken> {
    const payload: UserPayload = {
      sub: user.password,
      email: user.email,
      name: user.name,
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      access_token: jwtToken,
    };
  }

  async validateUser(user: string, password: string) {
    const userDocument = await this.usersService.findByUser(user);

    console.log(userDocument); // Verifica o documento do usuário retornado pela consulta

    if (userDocument && userDocument.password) {
      const isPasswordValid = await bcrypt.compare(
        password,
        userDocument.password,
      );

      console.log(isPasswordValid); // Verifica o resultado da comparação de senha

      if (isPasswordValid) {
        return {
          ...userDocument.toJSON(),
          password: undefined,
        };
      }
    }
    throw new Error('Email address or password provided is incorrect.');
  }
}
