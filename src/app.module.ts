import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { CourseModule } from './modules/CourseModule';
import { UserModule } from './modules/UserModule';
import Course from './models/entities/Couse';
import User from './models/entities/User';
import { ConfigModule } from '@nestjs/config';
import { EnrollmentModule } from './modules/EnrollmentModule';
import { AuthModule } from './modules/AuthModule';
import Enrollment from './models/entities/Enrollment';
import WelcomeController from './controllers/WelcomeController';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: process.env.DESAFIO_DB_TYPE as any,
      host: process.env.DESAFIO_DB_HOST,
      port: process.env.DESAFIO_DB_PORT as any,
      username: process.env.DESAFIO_DB_USER,
      password: process.env.DESAFIO_DB_PASSWORD,
      database: process.env.DESAFIO_DB_NAME,
      ssl: {
        rejectUnauthorized: false, // Necessário para conexões TLS com Neon
      },
      entities: [
        User,
        Course,
        Enrollment
      ],
      synchronize: true,
    }),
    UserModule,
    CourseModule,
    EnrollmentModule,
    AuthModule
  ],
  controllers: [WelcomeController]
})
export class AppModule {}
