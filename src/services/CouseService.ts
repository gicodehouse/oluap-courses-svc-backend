import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository, In } from "typeorm";

import AlreadyExistException from "src/models/exceptions/AlreadyExistException";
import MessageEnumeration from "src/models/enums/MessageEnumeration";
import CourseUpdateDTO from "src/models/dtos/course/CourseUpdateDTO";
import CourseDTO from "src/models/dtos/course/CourseDTO";
import Course from "src/models/entities/Couse";

@Injectable()
class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly repository: Repository<Course>,
  ) {}

  async create(course: CourseDTO): Promise<Course> {
    const courseRepo = await this.repository.findOneBy({ title: course.title });
    if(courseRepo)
        throw new AlreadyExistException(MessageEnumeration.REGISTER_ALREADY_EXIST);

    const newCourse = this.repository.create(course);
    return this.repository.save(newCourse);
  }

  async findAll(): Promise<Course[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<Course> {
    const course = await this.repository.findOneBy({ id });
    if (!course)
      throw new NotFoundException(MessageEnumeration.COURSE_NOT_EXIST);
    
    return course;
  }

  async findByIds(ids: number[]): Promise<Course[]> {
    return this.repository.find({
      where: { id: In(ids) },
    });
  }

  async update(id: number, toUpdate: CourseUpdateDTO): Promise<Course> {
    const course = await this.findOne(id);

    const updateCourse = this.repository.merge(course, toUpdate);
    return this.repository.save(updateCourse);
  }

  async remove(id: number): Promise<void> {
    const course = await this.findOne(id);
    await this.repository.remove(course);
  }
}

export default CourseService;
