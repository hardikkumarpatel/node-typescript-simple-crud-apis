import { Model } from 'objection';
import Knex from 'knex';
import { Client } from 'pg';
import config from '../../config/Config';
import Logging from '../../config/Logging';
const NAMESPACE = 'DBModel';
const logging = new Logging();
logging.infoMessage(NAMESPACE, 'Query log', Client);

const knex = Knex({
    client: 'pg',
    useNullAsDefault: true,
    searchPath: ['public'],
    connection: {
        host: config.DBHOST,
        user: config.DBUSER,
        password: config.DBPASS,
        database: config.DBNAME
    },
    debug: config.DBDEBUG === 'true'
});

Model.knex(knex);

export default Model;
