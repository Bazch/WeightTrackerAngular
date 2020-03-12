import { UserWeight } from './user-weight';
import { UserLift } from './user-lift';

export class User {
    
    id: number;
    name: string;
    email: string;
    sex: string;
    length: number;
    username: string;
    password: string;
    userWeights: UserWeight[];
    userLifts: UserLift[];
    
}
