// import { RequireOnlyOne } from '../src/common/types/requireOnlyOne.type';
// import * as rateLimit from "express-rate-limit";
// import { MongooseModuleOptions } from "@nestjs/mongoose";
// import { ValidationPipeOptions } from "@nestjs/common";
// import mongoose_delete = require("mongoose-delete");
import { IUtil } from 'config';

type IConfigServer = { port: number } & Partial<{
  host: string;
  protocol: string;
  // Calculated values
  parsedUrl: string;
}>;

// type IConfigDatabase = RequireOnlyOne<{
//   uri: string;
//   host: string;
//   hosts: string[];
// }> &
//   RequireOnlyOne<{ uri: string; port: number; ports: number[] }> &
//   RequireOnlyOne<{ uri: string; dbName: string }> &
//   Partial<{
//     auth: {
//       username: string;
//       password: string;
//     };
//     // Calculated values
//     parsedUrl: string;
//     isLocalDb: boolean;
//   }>;

// type IConfigJwt = {
//   secret: string;
//   signOptions: {
//     expiresIn: number;
//   };
//   ignoreExpiration: boolean;
// };

// type IConfigAdmin = {
//   name: string;
//   email: string;
//   pass: string;
//   roles: ["admin"];
// };

// type IConfigSwagger = {
//   initOnPath: string;
//   basePath: string;
//   title: string;
//   description: string;
//   version: string;
// };

// type IConfigMongooseDelete = {
//   overrideMethods: boolean | "all" | mongoose_delete.overridableMethods[];
//   deletedAt: boolean;
//   deletedBy: boolean;
//   indexFields: boolean | "all" | keyof mongoose_delete.SoftDeleteInterface;
//   validateBeforeDelete: boolean;
//   deletedByType: any;
// };

export interface IConfig {
  server: IConfigServer;

  //   admin: IConfigAdmin;

  //   database: IConfigDatabase;
  //   mongoose: MongooseModuleOptions;
  //   mongooseDelete: Partial<IConfigMongooseDelete>;

  //   elasticSearch: { host: string };

  //   swagger: IConfigSwagger;

  //   classValidator: ValidationPipeOptions;
  //   bcrypt: { rounds: number /* salt number preferred from 10-12 */ };
  //   jwt: IConfigJwt;
  //   rateLimit: rateLimit.Options;

  util?: IUtil;
}
