import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { BaseController } from '../../../vendors/controller/BaseController';
import { CreateUserInputDto } from './dto/user.dto';

@Controller('users')
@ApiTags('users')
export class UsersController extends BaseController {
  constructor(private userService: UsersService) { super(); }
  @Get('/')
  @ApiOperation({
    description: 'des',
    summary: 'Get list users'
  })
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get('/:userId')
  @ApiOperation({
    description: 'des',
    summary: 'Get user by userId'
  })
  get(@Param('userId') id: number) {
    const user = this.userService.getById(id);
    return user;
  }
  @Post('/')
  @ApiOperation({
    description: 'des',
    summary: 'Create new user'
  })
  async create(@Body() createUserDto: CreateUserInputDto) {
    const user = await this.userService.create(createUserDto);
    return user;
  }
}
