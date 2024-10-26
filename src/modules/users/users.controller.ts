import { Controller, Get } from '@nestjs/common';
import { ActiveUserId } from 'src/shared/decorators/ActiveUserId';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/currentUser')
  currentUser(@ActiveUserId() userId: any) {
    return this.usersService.getUserById(userId);
  }
}
