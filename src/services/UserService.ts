import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import AlreadyExistException from 'src/models/exceptions/AlreadyExistException';
import MessageEnumeration from 'src/models/enums/MessageEnumeration';

import UserUpdateDTO from 'src/models/dtos/user/UserUpdateDTO';
import PasswordUtils from 'src/utils/PasswordUtils';
import UserDTO from 'src/models/dtos/user/UserDTO';
import User from 'src/models/entities/User';

@Injectable()
class UserService {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  async create(user: UserDTO): Promise<User> {
    const userRepo = await this.repository.findOneBy({ email: user.email });
    if(userRepo)
        throw new AlreadyExistException(MessageEnumeration.REGISTER_ALREADY_EXIST);

    const newUser = this.repository.create(user);
    return this.repository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return this.repository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.repository.findOneBy({ id });
    if (!user)
      throw new NotFoundException(MessageEnumeration.USER_NOT_EXIST);
    
    return user;
  }

  async update(id: number, toUpdate: UserUpdateDTO): Promise<User> {
    const user = await this.findOne(id);
    if (toUpdate.password)
      toUpdate.password = PasswordUtils.hashPassword(user.password);
    
    const updatedUser = this.repository.merge(user, toUpdate);
    return this.repository.save(updatedUser);
  }

  async remove(id: number): Promise<void> {
    const user = await this.findOne(id);
    await this.repository.remove(user);
  }
}

export default UserService;
