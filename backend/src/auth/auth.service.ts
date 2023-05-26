import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(user: string, password: string) {
    const userDocument = await this.usersService.findByUser(user);

    console.log(userDocument); // Verifica o documento do usuário retornado pela consulta

    if (userDocument) {
      const isPasswordValid = password === userDocument.password;

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
