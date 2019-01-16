import apiUrl from '~/common/utils/getApi';

export default class ContributionModel {
  static getAllContribution() {
    const graphqlQuery = {
      query: `{
        contributions {
          address,
          value
        }
      }`,
    };

    return fetch(apiUrl(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(graphqlQuery),
    });
  }
}
