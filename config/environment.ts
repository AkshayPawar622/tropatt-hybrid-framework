import dotenv from 'dotenv';

dotenv.config();

const testEnv = (process.env.TEST_ENV || 'qa') as 'qa' | 'stage';

const environments = {
    qa: {
        baseURL: 'https://demo.tropatt.com',
    },

    stage: {
        baseURL: 'https://demo.tropatt.com',
    },
};

export const environment = {
    baseURL: environments[testEnv].baseURL,

    username: process.env.TROPATT_USERNAME || '',
    password: process.env.TROPATT_PASSWORD || '',
    invalidUsername: process.env.TROPATT_INVALID_USERNAME || '',
    invalidPassword: process.env.TROPATT_INVALID_PASSWORD || '',

    language: process.env.TROPATT_LANGUAGE || 'English',
};