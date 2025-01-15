import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import UserService from 'src/services/UserService';
import UserSwaggerExample from 'src/models/swagger-examples/UserSwaggerExample';
import HttpStatusEnum from 'src/models/enums/HttpStatusEnum';
import MessageEnumeration from 'src/models/enums/MessageEnumeration';
import UserDTO from 'src/models/dtos/user/UserDTO';
import UserUpdateDTO from 'src/models/dtos/user/UserUpdateDTO';

@ApiTags('users')
@Controller('/users')
class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: UserSwaggerExample.API_USER_CREATE_DESCRIPTION })
  @ApiResponse({ status: HttpStatusEnum.CREATED, description: MessageEnumeration.REGISTER_CREATED })
  @ApiResponse({ status: HttpStatusEnum.UNAUTHORIZED, description: MessageEnumeration.NOT_AUTHORIZED })
  @ApiBody(UserSwaggerExample.API_USER_CREATE)
  create(@Body() user: UserDTO) {
    return this.userService.create(user);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: UserSwaggerExample.API_USER_GET_ALL_DESCRIPTION })
  @ApiResponse({ status: HttpStatusEnum.CREATED, description: MessageEnumeration.REGISTER_CREATED })
  @ApiResponse({ status: HttpStatusEnum.NOT_FOUND, description: MessageEnumeration.USER_NOT_EXIST })
  @ApiResponse({ status: HttpStatusEnum.UNAUTHORIZED, description: MessageEnumeration.NOT_AUTHORIZED })
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: UserSwaggerExample.API_USER_GET_ONE_DESCRIPTION })
  @ApiResponse({ status: HttpStatusEnum.CREATED, description: MessageEnumeration.REGISTER_CREATED })
  @ApiResponse({ status: HttpStatusEnum.NOT_FOUND, description: MessageEnumeration.USER_NOT_EXIST })
  @ApiResponse({ status: HttpStatusEnum.UNAUTHORIZED, description: MessageEnumeration.NOT_AUTHORIZED })
  findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: UserSwaggerExample.API_USER_UPDATE_ONE_DESCRIPTION })
  @ApiResponse({ status: HttpStatusEnum.CREATED, description: MessageEnumeration.REGISTER_CREATED })
  @ApiResponse({ status: HttpStatusEnum.NOT_FOUND, description: MessageEnumeration.USER_NOT_EXIST })
  @ApiResponse({ status: HttpStatusEnum.UNAUTHORIZED, description: MessageEnumeration.NOT_AUTHORIZED })
  @ApiBody(UserSwaggerExample.API_USER_UPDATE_ONE)
  update(@Param('id') id: number, @Body() toUpdate: UserUpdateDTO) {
    return this.userService.update(+id, toUpdate);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: UserSwaggerExample.API_USER_DELETE_ONE_DESCRIPTION })
  @ApiResponse({ status: HttpStatusEnum.CREATED, description: MessageEnumeration.REGISTER_CREATED })
  @ApiResponse({ status: HttpStatusEnum.NOT_FOUND, description: MessageEnumeration.USER_NOT_EXIST })
  @ApiResponse({ status: HttpStatusEnum.UNAUTHORIZED, description: MessageEnumeration.NOT_AUTHORIZED })
  remove(@Param('id') id: number) {
    return this.userService.remove(+id);
  }
}

export default UserController;
