import { IsString } from 'class-validator';

export class LoginRequestBody {
  @IsString()
  user: string;

  @IsString()
  password: string;
}
