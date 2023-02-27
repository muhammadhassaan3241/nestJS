import { Exclude } from 'class-transformer'

export interface User {
    userId: number;
    userName: string;
    userPassword: string;
}

export class SerializedUser {
    userName: string;

    @Exclude()
    userPassword: string;

    constructor(partial: Partial<SerializedUser>) {
        Object.assign(this, partial)    // Object.assign(target,source);
    }
}