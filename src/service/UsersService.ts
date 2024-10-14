import { AxiosResponse } from 'axios';
import { httpClient } from './Http';
import { LoginUserRequest, UserResponse } from './models/users';

const loginUrl = '/users/login';

export const loginUser = (request: LoginUserRequest): Promise<AxiosResponse<UserResponse>> =>
    httpClient.post(loginUrl, request);
