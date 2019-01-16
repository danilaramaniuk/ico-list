import express from 'express';
import cors from 'cors';
import graphqlHttp from 'express-graphql';
import config from './config';
import graphqlSchema from './graphql/schema';
import graphqlResolver from './graphql/resolvers';

const app = express();

app.use(cors());

app.use(
  '/graphql',
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolver,
    graphiql: true,
    formatError(err) {
      if (!err.originalError) {
        return err;
      }

      const data = err.originalError.data;
      const message = err.message || 'An error occurred.';
      const code = err.originalError.code || 500;

      return { message, status: code, data };
    },
  })
);

app.listen(config.PORT, () => console.log(`Server is running on ${config.PORT}`));
