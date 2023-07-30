import { Controller, Get, Req } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/currentUser')
  currentUser(@Req() request: any) {
    const userId = request.userId;

    return this.usersService.getUserById(userId);
  }
}
