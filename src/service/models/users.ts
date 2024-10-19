import { User } from '../../models/User';

export interface LoginUserRequest {
    email: string;
    password: string;
}

export interface UserResponse extends User {
    token: string;
    token_expiration: string;
    created_at: string;
    updated_at: string;
}
