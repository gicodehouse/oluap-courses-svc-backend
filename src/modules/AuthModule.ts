import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';

import { JwtStrategy } from 'src/security/strategy/JwtStrategy';
import AuthService from 'src/services/AuthService';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from 'src/models/entities/User';
import { AuthController } from 'src/controllers/AuthController';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    PassportModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
    TypeOrmModule.forFeature([User])
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
