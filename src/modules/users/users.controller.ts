import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/currentUser')
  currentUser(@ActiveUserId() userId: any) {
    return this.usersService.getUserById(userId);
  }
}
