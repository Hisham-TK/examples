import { Prisma } from 'prisma-binding';
// import path from 'path';

const prisma = new Prisma({
  // typeDefs: path.join(process.cwd(), 'generated', 'prisma'),
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'localhost:4466',
});
console.log('prisma', prisma);
console.log('process.cwd()', process.cwd());
