import { createClient } from 'redis';
// import * as Redis from 'redis';
// console.log({ Redis, createClient });

const redisClient = createClient({});

console.log('redisClient', JSON.stringify(redisClient));
