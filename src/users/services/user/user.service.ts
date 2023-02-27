import { Injectable, } from '@nestjs/common';
import { UpdateUserDto } from 'src/users/dtos/User.dto';
import { UserRepository } from 'src/users/repositories/User.repositories';
import { User } from 'src/users/schemas/User.schema';
import { SerializedUser } from 'src/users/types/User';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) { }

    async getUserById(userId: string): Promise<User> {
        return this.userRepository.findOne({ userId })
    }

    async getUsers(): Promise<User[]> {
        (await this.userRepository.find({})).map((user) => { return new SerializedUser(user) });
        return;
    }

    async createUser(
        userName: string,
        userEmail: string,
        userPassword: string,
    ): Promise<User> {
        return this.userRepository.create({
            userId: (Math.floor(Math.random() * 1000000) + Date.now()).toString(),
            userName,
            userEmail,
            userPassword,
        });
    }

    async updateUser(userId: string, updateUserDto: UpdateUserDto): Promise<User> {
        return this.userRepository.findOneandUpdate({ userId }, updateUserDto);
    }

}
