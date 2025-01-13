import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

import AlreadyExistException from "src/models/exceptions/AlreadyExistException";
import EnrollmentUpdateDTO from "src/models/dtos/enrollment/EnrollmentUpdateDTO";
import MessageEnumeration from "src/models/enums/MessageEnumeration";
import EnrollmentDTO from "src/models/dtos/enrollment/EnrollmentDTO";
import Enrollment from "src/models/entities/Enrollment";
import CourseService from "./CouseService";
import UserService from "./UserService";

@Injectable()
class EnrollmentService {
    constructor(
        @InjectRepository(Enrollment)
        private readonly repository: Repository<Enrollment>,
        private readonly userService: UserService,
        private readonly courseService: CourseService,
      ) {}
    
      async create(enrollment: EnrollmentDTO): Promise<Enrollment> {
        await this.userService.findOne(enrollment.user_id);  
        await this.courseService.findOne(enrollment.course_id);

        const newEnrollment = this.repository.create(enrollment);
        return this.repository.save(newEnrollment);
      }
    
      async findAll(): Promise<Enrollment[]> {
        return this.repository.find();
      }
    
      async findOne(id: number): Promise<Enrollment> {
        const enrollment = await this.repository.findOneBy({ id });
        if (!enrollment)
          throw new NotFoundException(MessageEnumeration.REGISTER_NOT_FOUND);
        
        return enrollment;
      }
    
      async update(id: number, toUpdate: EnrollmentUpdateDTO): Promise<Enrollment> {
        const enrollment = await this.findOne(id);        
        const updatedEnrollment = this.repository.merge(enrollment, toUpdate);
        return this.repository.save(updatedEnrollment);
      }
    
      async remove(id: number): Promise<void> {
        const enrollment = await this.findOne(id);
        await this.repository.remove(enrollment);
      }
}

export default EnrollmentService;