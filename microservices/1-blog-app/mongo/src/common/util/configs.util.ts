import config from 'config';
import { IConfig } from '../../../config/config.interface';
import { parseServerUrl } from './server.util';
// import { parseDbUrl, isLocalDb } from './db.util';

export const configs: IConfig = config as any;

configs.server.parsedUrl = parseServerUrl();

// configs.database.parsedUrl = parseDbUrl();
// console.log('configs.database.parsedUrl', configs.database.parsedUrl);
// configs.database.isLocalDb = isLocalDb();
