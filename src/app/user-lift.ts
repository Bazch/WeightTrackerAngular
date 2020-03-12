import { User } from './user';

import { UserLiftDetails } from './user-lift-details';

export class UserLift {

    id:             number;
    title:          string;
    user:           User;
    liftDetails:    UserLiftDetails[];

    constructor(title: string, user: User){
        this.title = title;
        this.user = user;
    }

}
