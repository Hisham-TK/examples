import { IConfig } from './config.interface';

const configurations: IConfig = {
  server: {
    port: 3334,
    // host: 'localhost',
    host: '127.0.0.1',
    protocol: 'http',
  },

  //   database: {
  //     host: "localhost",
  //     // hosts: ['localhost1', 'localhost2', 'localhost3'],
  //     // port: 27017,
  //     ports: [27017, 27018, 27019],
  //     dbName: "nest-js-boilerplate",
  //     // uri: 'mongodb://localhost:27017/nest-js-boilerplate',
  //     // auth: {
  //     //   username: 'admin',
  //     //   password: 'pass',
  //     // },
  //   },
  //   mongoose: {
  //     useNewUrlParser: true,
  //     useCreateIndex: true,
  //     useFindAndModify: false,
  //     useUnifiedTopology: true,
  //     // autoIndex: true, // Build indexes automatically
  //     // reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  //     // reconnectInterval: 500, // Reconnect every 500ms
  //     poolSize: 10, // Maintain up to 10 socket connections
  //     // If not connected, return errors immediately rather than waiting for reconnect
  //     bufferMaxEntries: 0,
  //     connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  //     socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  //     family: 4, // Use IPv4, skip trying IPv6
  //   },
  //   mongooseDelete: {
  //     deletedAt: true,
  //   },
  //   elasticSearch: {
  //     host: "http://127.0.0.1:9200",
  //   },

  //   bcrypt: {
  //     rounds: 10,
  //   },
  //   classValidator: {
  //     forbidNonWhitelisted: true,
  //     forbidUnknownValues: true,
  //   },
  //   jwt: {
  //     secret: "abcd123456",
  //     signOptions: {
  //       expiresIn: 3600000, // 1 week  = 604800000 ms, 1 hour  = 3600000 ms
  //     },
  //     ignoreExpiration: false,
  //   },

  //   rateLimit: {
  //     windowMs: 15 * 60 * 1000, // 15 minutes
  //     max: 1000, // limit each IP to 1000 requests per windowMs
  //   },

  //   swagger: {
  //     initOnPath: "api",
  //     basePath: "api",
  //     title: "NestJS boilerplate",
  //     description:
  //       "Create boilerplate using TypeScript, Express, NestJS, Mongoose, Swagger, Passport, JWT",
  //     version: "1.0",
  //   },

  //   admin: {
  //     name: "Admin",
  //     email: "super@man.net",
  //     pass: "P@$$W0RD",
  //     roles: ["admin"],
  //   },
};

export default configurations;
