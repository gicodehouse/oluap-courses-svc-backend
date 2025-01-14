import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

import EnrollmentSwaggerExample from 'src/models/swagger-examples/EnrollmentSwaggerExample';
import EnrollmentUpdateDTO from 'src/models/dtos/enrollment/EnrollmentUpdateDTO';
import MessageEnumeration from 'src/models/enums/MessageEnumeration';
import EnrollmentService from 'src/services/EnrollmentService';
import HttpStatusEnum from 'src/models/enums/HttpStatusEnum';
import EnrollmentDTO from 'src/models/dtos/enrollment/EnrollmentDTO';

@ApiTags('enrollments')
@Controller('/api/enrollments')
class EnrollmentController {
  constructor(private readonly enrollmentService: EnrollmentService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: EnrollmentSwaggerExample.API_ENROLLMENT_CREATE_DESCRIPTION })
  @ApiResponse({ status: HttpStatusEnum.CREATED, description: MessageEnumeration.REGISTER_CREATED })
  @ApiResponse({ status: HttpStatusEnum.UNAUTHORIZED, description: MessageEnumeration.NOT_AUTHORIZED })
  @ApiBody(EnrollmentSwaggerExample.API_ENROLLMENT_CREATE)
  create(@Body() enrollment: EnrollmentDTO) {
    return this.enrollmentService.create(enrollment);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: EnrollmentSwaggerExample.API_ENROLLMENT_GET_ALL_DESCRIPTION })
  @ApiResponse({ status: HttpStatusEnum.NOT_FOUND, description: MessageEnumeration.ENROLLMENT_NOT_EXIST })
  @ApiResponse({ status: HttpStatusEnum.UNAUTHORIZED, description: MessageEnumeration.NOT_AUTHORIZED })
  findAll() {
    return this.enrollmentService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: EnrollmentSwaggerExample.API_ENROLLMENT_GET_ONE_DESCRIPTION })
  @ApiResponse({ status: HttpStatusEnum.NOT_FOUND, description: MessageEnumeration.ENROLLMENT_NOT_EXIST })
  @ApiResponse({ status: HttpStatusEnum.UNAUTHORIZED, description: MessageEnumeration.NOT_AUTHORIZED })
  findOne(@Param('id') id: number) {
    return this.enrollmentService.findOne(+id);
  }

  @Get('/users/:id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: EnrollmentSwaggerExample.API_ENROLLMENT_GET_ALL_BY_USER_ID_DESCRIPTION })
  @ApiResponse({ status: HttpStatusEnum.NOT_FOUND, description: MessageEnumeration.ENROLLMENT_NOT_EXIST })
  @ApiResponse({ status: HttpStatusEnum.UNAUTHORIZED, description: MessageEnumeration.NOT_AUTHORIZED })
  findAllCoursesByUserId(@Param('id') id: number) {
    return this.enrollmentService.findAllCoursesByUserId(+id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: EnrollmentSwaggerExample.API_ENROLLMENT_UPDATE_ONE_DESCRIPTION })
  @ApiResponse({ status: HttpStatusEnum.CREATED, description: MessageEnumeration.REGISTER_CREATED })
  @ApiResponse({ status: HttpStatusEnum.NOT_FOUND, description: MessageEnumeration.ENROLLMENT_NOT_EXIST })
  @ApiResponse({ status: HttpStatusEnum.UNAUTHORIZED, description: MessageEnumeration.NOT_AUTHORIZED })
  @ApiBody(EnrollmentSwaggerExample.API_ENROLLMENT_UPDATE_ONE)
  update(@Param('id') id: number, @Body() toUpdate: EnrollmentUpdateDTO) {
    return this.enrollmentService.update(+id, toUpdate);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: EnrollmentSwaggerExample.API_ENROLLMENT_DELETE_ONE_DESCRIPTION })
  @ApiResponse({ status: HttpStatusEnum.CREATED, description: MessageEnumeration.REGISTER_CREATED })
  @ApiResponse({ status: HttpStatusEnum.NOT_FOUND, description: MessageEnumeration.ENROLLMENT_NOT_EXIST })
  @ApiResponse({ status: HttpStatusEnum.UNAUTHORIZED, description: MessageEnumeration.NOT_AUTHORIZED })
  remove(@Param('id') id: number) {
    return this.enrollmentService.remove(+id);
  }
}

export default EnrollmentController;
