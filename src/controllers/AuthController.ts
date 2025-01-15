import { Controller, Post, Body, Get } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import AuthSwaggerExample from 'src/models/swagger-examples/AuthSwaggerExample';
import AuthService from 'src/services/AuthService';
import LoginDTO from 'src/models/dtos/auth/LoginDTO';

@ApiTags('auth')
@Controller('/api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Realizar login' })
  @ApiResponse({ status: 200, description: 'Login bem-sucedido.' })
  @ApiResponse({ status: 401, description: 'Credenciais inválidas.' })
  @ApiBody(AuthSwaggerExample.API_AUTH_LOGIN)
  async login(@Body() loginDto: LoginDTO) {
    const validate = await this.authService.validateUser(
      loginDto.email,
      loginDto.password,
    );
    return this.authService.login(validate);
  }

  @Get('')
  async test(){
    return "HELLO WORLD!";
  }
}
