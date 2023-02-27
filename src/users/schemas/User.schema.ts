import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    userId: string;

    @Prop()
    userName: string;

    @Prop()
    userEmail: string;

    @Prop()
    userPassword: string;

};

export const UserSchema = SchemaFactory.createForClass(User);