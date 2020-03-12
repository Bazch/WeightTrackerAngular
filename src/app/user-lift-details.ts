import { UserLift } from './user-lift';

export class UserLiftDetails {

    id:         number;
    value:      number;
    reps:       number;
    date:       Date;
    userLift:   UserLift;

    constructor(value: number, date: Date, reps: number, userLift: UserLift) {
        this.value = value;             
        this.date = date;
        this.reps = reps;
        this.userLift = userLift; 
        }

}
