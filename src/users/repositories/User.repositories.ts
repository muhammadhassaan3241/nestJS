import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { User, UserDocument } from '../schemas/User.schema';

@Injectable()
export class UserRepository {
    constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) { }

    async findOne(UserFilterQuery: FilterQuery<User>): Promise<User> {
        return this.UserModel.findOne(UserFilterQuery);
    }

    async find(UsersFilterQuery: FilterQuery<User>): Promise<User[]> {
        return this.UserModel.find(UsersFilterQuery);
    }

    async create(user: User): Promise<User> {
        const newUser = new this.UserModel(user);
        return newUser.save();
    }

    async findOneandUpdate(UserFilterQuery: FilterQuery<User>, user: Partial<User>): Promise<User> {
        return this.UserModel.findOneAndUpdate(UserFilterQuery, user);
    }
}