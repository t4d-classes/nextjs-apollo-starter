import { ApolloServer } from 'apollo-server-express';

import { typeDefs } from './typeDefs';
import { resolvers } from './resolvers';

const apolloServerConfig = {
  typeDefs,
  resolvers,
  context: async ({ req, res }) => {
    return {
      req,
      res,
      restUrl: process.env.REST_URL,
    };
  },
};

export const apollo = new ApolloServer(apolloServerConfig);
