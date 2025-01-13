import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import EnrollmentController from 'src/controllers/EnrollmentController';
import Course from 'src/models/entities/Couse';

import Enrollment from 'src/models/entities/Enrollment';
import User from 'src/models/entities/User';
import CourseService from 'src/services/CouseService';
import EnrollmentService from 'src/services/EnrollmentService';
import UserService from 'src/services/UserService';

@Module({
  imports: [TypeOrmModule.forFeature([Enrollment, User, Course])],
  controllers: [EnrollmentController],
  providers: [EnrollmentService, UserService, CourseService],
})
export class EnrollmentModule {}
