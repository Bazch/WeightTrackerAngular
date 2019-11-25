import { User } from './user';

export class UserWeight {
    value: number;
    user: User;
    date: Date;
    
    constructor(value: number, user: User) {
    this.value = value;
    this.user = user;       
    }
}
