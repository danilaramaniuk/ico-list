import apiUrl from '~/common/utils/getApi';

export default class ContributionModel {
  static getContributions(currency) {
    const graphqlQuery = {
      query: `
        query FetchContributions($currency: String) {
          contributions(currency: $currency) {
            address,
            currency,
            value,
            txid
          }
        }
      `,
      variables: {
        currency,
      },
    };

    return fetch(apiUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphqlQuery),
    }).then(r => r.json());
  }
}
