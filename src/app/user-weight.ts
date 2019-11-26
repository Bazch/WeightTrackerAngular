import { User } from './user';

export class UserWeight {
    id: number;
    value: number;
    user: User;
    date: Date;
    bmi: number;
    
    constructor(value: number, user: User) {
    this.value = value;
    this.user = user;       
    }
}
