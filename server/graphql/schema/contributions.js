const typeShard = `
  type Contribution {
    address: String!
    currency: String!
    value: Int!
    txid: String!
  }
`;

const queryShard = `
  contributions: [Contribution!]!,
`;

export {
  typeShard,
  queryShard,
};
