import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  ApiOkResponse,
  ApiOperation,
  ApiProperty,
  ApiTags,
} from '@nestjs/swagger';

class User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;
}

const user: User = {
  id: 1,
  name: 'John Doe',
  email: 'johndoe@gmail.com',
};

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOkResponse({ type: [User] })
  @ApiOperation({ summary: 'Get all users', operationId: 'users.findAll' })
  @Get()
  findAll() {
    return [user];
  }

  @ApiOkResponse({ type: User })
  @ApiOperation({ summary: 'Get all users', operationId: 'users.findOne' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return user;
  }
}
