import { User } from '../models/User';

const localStorageKey = 'user';
const localStorageKeys = {
    user: 'user',
    tokenAge: 'tokenAge',
};

export const saveUser = (user: User): void => {
    localStorage.setItem(localStorageKeys.user, JSON.stringify(user));
    localStorage.setItem(localStorageKeys.tokenAge, JSON.stringify(Date.now()));
};

export const clearUser = (): void => {
    localStorage.removeItem(localStorageKey);
};

export const loadUser = (): User | undefined => {
    const userValue = localStorage.getItem(localStorageKey);
    return userValue ? JSON.parse(userValue) : undefined;
};

export const loadTokenAge = (): Date | undefined => {
    const tokenAgeValue = localStorage.getItem(localStorageKeys.tokenAge);
    return tokenAgeValue ? new Date(JSON.parse(tokenAgeValue)) : undefined;
};
