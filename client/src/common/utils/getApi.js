export default () =>
  (process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/graphql'
    : '/api/graphql');

