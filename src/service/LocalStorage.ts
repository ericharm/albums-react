import { User } from '../models/User';

const localStorageKeys = {
    user: 'user',
};

export const saveUser = (user: User): void => {
    localStorage.setItem(localStorageKeys.user, JSON.stringify(user));
};

export const clearUser = (): void => {
    localStorage.removeItem(localStorageKeys.user);
};

export const loadUser = (): User | undefined => {
    const userValue = localStorage.getItem(localStorageKeys.user);
    return userValue ? JSON.parse(userValue) : undefined;
};
