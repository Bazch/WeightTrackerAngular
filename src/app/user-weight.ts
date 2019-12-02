import { User } from './user';

export class UserWeight {
    public id: number;
    public value: number;
    public user: User;
    public date: Date;
    public bmi: number;
    
    constructor(value: number, user: User) {
    this.value = value;
    this.user = user;       
    


}
}
