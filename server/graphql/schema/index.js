import { buildSchema } from 'graphql';
import {
  typeShard as contributionsTypeShard,
  queryShard as contributionsQueryShard,
} from './contributions';

export default buildSchema(`
  ${contributionsTypeShard}

  type RootQuery {
    ${contributionsQueryShard}
  }

  schema {
    query: RootQuery
  }
`);
