import dotenv from 'dotenv';

dotenv.config();

const testEnv = (process.env.TEST_ENV || 'qa') as 'qa' | 'stage';

const environments = {
    qa: {
        baseURL: process.env.TROPATT_BASE_URL || '',
    },

    stage: {
        baseURL: process.env.TROPATT_BASE_URL || '',
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