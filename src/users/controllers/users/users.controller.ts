import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, UseInterceptors, UsePipes, ValidationPipe, UseFilters } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/users/filters/HttpException.filter';
import { User } from 'src/users/schemas/User.schema';
import { UserService } from 'src/users/services/user/user.service';

@Controller('users')
export class UsersController {
    constructor(@Inject('USER_SERVICE') private readonly userService: UserService) { }

    @Get('')
    @UsePipes(ValidationPipe)
    async getUsers(): Promise<User[]> {
        const users = this.userService.getUsers();
        if (users) return users;
        else throw new HttpExceptionFilter();
    }

}
