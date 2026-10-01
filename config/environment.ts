import dotenv from 'dotenv';

dotenv.config();

export const environment = {
    baseURL: process.env.TROPATT_BASE_URL || '',
    username: process.env.TROPATT_USERNAME || '',
    password: process.env.TROPATT_PASSWORD || '',
    invalidUsername: process.env.TROPATT_INVALID_USERNAME || '',
    invalidPassword: process.env.TROPATT_INVALID_PASSWORD || '',
    
    language: process.env.TROPATT_LANGUAGE || 'English',
};