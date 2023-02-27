import { IsEmail, IsNotEmpty, MinLength } from 'class-validator'

export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3)
    userName: string;

    @IsNotEmpty()
    @IsEmail()
    userEmail: string;

    @IsNotEmpty()
    @MinLength(8)
    userPassword: string;
}

export class UpdateUserDto {
    @IsNotEmpty()
    @MinLength(3)
    userName: string;

    @IsNotEmpty()
    @MinLength(8)
    userPassword: string;
}