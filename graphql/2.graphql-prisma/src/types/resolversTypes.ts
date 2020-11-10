import { PubSub } from 'graphql-yoga';
import { DbType } from '../modules/db';

interface ContextType {
  db: DbType;
  pubsub: PubSub;
}

type graphQlFunction<T> = (
  parent: any,
  args: T,
  ctx: ContextType,
  info: any,
) => T;

export type GraphQLResolverMethods<T = any> = {
  [key: string]: graphQlFunction<T> | { subscribe: graphQlFunction<T> };
};

export type MutationResolvers<T = any> = {
  create: (
    parent: any,
    args: { data: Omit<T, 'id'> },
    ctx: ContextType,
    info: any,
  ) => T;

  update: (
    parent: any,
    args: { id: string; data: T },
    ctx: ContextType,
    info: any,
  ) => T;

  delete: (parent: any, args: { id: string }, ctx: ContextType, info: any) => T;
};

// import { MergeInfo } from 'graphql-tools';
// import {
//   GraphQLResolveInfo,
//   // GraphQLSchema,
//   GraphQLTypeResolver,
//   GraphQLIsTypeOfFn,
// } from 'graphql';

// export interface GraphQLResolverMethods<
//   TSource = any,
//   TContext = ContextType
// > {
//   [key: string]: IResolverObject<TSource, TContext>;
// }

// export interface IResolverObject<TSource = any, TContext = any> {
//   [key: string]:
//     | IFieldResolver<TSource, TContext>
//     | IResolverOptions<TSource, TContext>;
// }

// export interface IResolverOptions<TSource = any, TContext = any> {
//   fragment?: string;
//   fragments?: string[];
//   resolve?: IFieldResolver<TSource, TContext>;
//   subscribe?: IFieldResolver<TSource, TContext>;
//   __resolveType?: GraphQLTypeResolver<TSource, TContext>;
//   __isTypeOf?: GraphQLIsTypeOfFn<TSource, TContext>;
// }

// export declare type IFieldResolver<TSource, TContext> = (
//   source: TSource,
//   args: {
//     [argument: string]: any;
//   },
//   context: TContext,
//   info: GraphQLResolveInfo & {
//     mergeInfo?: MergeInfo;
//   },
// ) => any;
