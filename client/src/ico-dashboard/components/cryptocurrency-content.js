import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs';

const options = {
  scales: {
    xAxes: [{
      gridLines: {
        offsetGridLines: true,
      },
    }],
  },
};

export default class CryptocurrencyContent extends PureComponent {
  static propTypes = {
    contributions: PropTypes.arrayOf(PropTypes.shape({
      address: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      txid: PropTypes.string.isRequired,
    })).isRequired,
  };

  get contributions() {
    const { contributions } = this.props;

    return contributions.filter(({ currency }) => currency === 'BTC');
  }
  render() {
    const data = {
      labels: this.contributions.map((item, index) => index + 1),
      datasets: [
        {
          data: this.contributions.map(({ value }) => value),
        },
      ],
    };

    return (
      <Fragment>
        <Bar data={data} options={options} width={1200} height={600} />
        {
          this.contributions.map(({ currency, value, txid }) =>
              (<div key={txid}>{currency} - {value}</div>))
        }
      </Fragment>
    );
  }
}
