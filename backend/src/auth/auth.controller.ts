import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/AuthRequest';
import { IS_PUBLIC_KEY } from './decorators/is-public.decorator';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @SetMetadata(IS_PUBLIC_KEY, true)
  login(@Request() req: AuthRequest) {
    console.log(req.user);

    return this.authService.login(req.user);
    return 'Logou';
  }
}
