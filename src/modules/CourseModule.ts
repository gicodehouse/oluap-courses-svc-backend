import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import CourseController from 'src/controllers/CourseController';
import CourseService from 'src/services/CouseService';
import Course from 'src/models/entities/Couse';


@Module({
  imports: [TypeOrmModule.forFeature([Course])],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
