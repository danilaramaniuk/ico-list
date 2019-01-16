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

  render() {
    const { contributions } = this.props;

    const data = {
      labels: contributions.map((item, index) => index + 1),
      datasets: [
        {
          data: contributions.map(({ value }) => value),
        },
      ],
    };

    return (
      <Fragment>
        <Bar data={data} options={options} width={1000} height={600} />
        {
          contributions.map(({ currency, value, txid }) =>
              (<div key={txid}>{currency} - {value}</div>))
        }
      </Fragment>
    );
  }
}
