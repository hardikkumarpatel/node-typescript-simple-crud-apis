import dotenv from 'dotenv';
dotenv.config();

const SERVER_HOSTNAME: string = process.env.HOST || 'localhost';
const SERVER_PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5080;
const SERVER_BACKLOG: number = 5090;
const DB_HOST: string = process.env.DB_HOST;
const DB_NAME: string = process.env.DB_NAME;
const DB_USER: string = process.env.DB_USER;
const DB_PASS: string = process.env.DB_PASS;
const DB_DEBUG: string = process.env.DB_DEBUG;

const SERVER = {
    HOSTNAME: SERVER_HOSTNAME,
    PORT: SERVER_PORT,
    BACKLOG: SERVER_BACKLOG,
    DBHOST: DB_HOST,
    DBNAME: DB_NAME,
    DBUSER: DB_USER,
    DBPASS: DB_PASS,
    DBDEBUG: DB_DEBUG
};

export default SERVER;
