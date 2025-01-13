import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import CourseSwaggerExample from 'src/models/swagger-examples/CourseSwaggerExample';
import MessageEnumeration from 'src/models/enums/MessageEnumeration';
import CourseUpdateDTO from 'src/models/dtos/course/CourseUpdateDTO';
import HttpStatusEnum from 'src/models/enums/HttpStatusEnum';
import CourseService from 'src/services/CouseService';
import CourseDTO from 'src/models/dtos/course/CourseDTO';

@ApiTags('courses')
@Controller('/api/courses')
class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: CourseSwaggerExample.API_COURSE_CREATE_DESCRIPTION })
  @ApiResponse({ status: HttpStatusEnum.CREATED, description: MessageEnumeration.REGISTER_CREATED })
  @ApiResponse({ status: HttpStatusEnum.UNAUTHORIZED, description: MessageEnumeration.NOT_AUTHORIZED })
  @ApiBody(CourseSwaggerExample.API_COURSE_CREATE)
  create(@Body() course: CourseDTO) {
    return this.courseService.create(course);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: CourseSwaggerExample.API_COURSE_GET_ALL_DESCRIPTION })
  @ApiResponse({ status: HttpStatusEnum.CREATED, description: MessageEnumeration.REGISTER_CREATED })
  @ApiResponse({ status: HttpStatusEnum.NOT_FOUND, description: MessageEnumeration.COURSE_NOT_EXIST })
  @ApiResponse({ status: HttpStatusEnum.UNAUTHORIZED, description: MessageEnumeration.NOT_AUTHORIZED })
  findAll() {
    return this.courseService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: CourseSwaggerExample.API_COURSE_GET_ONE_DESCRIPTION })
  @ApiResponse({ status: HttpStatusEnum.CREATED, description: MessageEnumeration.REGISTER_CREATED })
  @ApiResponse({ status: HttpStatusEnum.NOT_FOUND, description: MessageEnumeration.COURSE_NOT_EXIST })
  @ApiResponse({ status: HttpStatusEnum.UNAUTHORIZED, description: MessageEnumeration.NOT_AUTHORIZED })
  findOne(@Param('id') id: number) {
    return this.courseService.findOne(+id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: CourseSwaggerExample.API_COURSE_UPDATE_ONE_DESCRIPTION })
  @ApiResponse({ status: HttpStatusEnum.CREATED, description: MessageEnumeration.REGISTER_CREATED })
  @ApiResponse({ status: HttpStatusEnum.NOT_FOUND, description: MessageEnumeration.COURSE_NOT_EXIST })
  @ApiResponse({ status: HttpStatusEnum.UNAUTHORIZED, description: MessageEnumeration.NOT_AUTHORIZED })
  @ApiBody(CourseSwaggerExample.API_COURSE_UPDATE_ONE)
  update(@Param('id') id: number, @Body() toUpdate: CourseUpdateDTO) {
    return this.courseService.update(+id, toUpdate);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: CourseSwaggerExample.API_COURSE_DELETE_ONE_DESCRIPTION })
  @ApiResponse({ status: HttpStatusEnum.CREATED, description: MessageEnumeration.REGISTER_CREATED })
  @ApiResponse({ status: HttpStatusEnum.NOT_FOUND, description: MessageEnumeration.COURSE_NOT_EXIST })
  @ApiResponse({ status: HttpStatusEnum.UNAUTHORIZED, description: MessageEnumeration.NOT_AUTHORIZED })
  remove(@Param('id') id: number) {
    return this.courseService.remove(+id);
  }
}

export default CourseController;
