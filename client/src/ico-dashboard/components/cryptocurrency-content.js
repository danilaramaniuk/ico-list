import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const BarWrapper = styled.div`
  width: 800px;
  height: 400px;
`;

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
          label: 'My First dataset',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
        },
      ],
    };

    return (
      <Fragment>
        <BarWrapper>
          <Bar
            data={data}
            getElementAtEvent={dataset => console.log(dataset)}
            width={100}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </BarWrapper>
        {
          contributions.map(({ currency, value, txid }) =>
              (<div key={txid}>{currency} - {value}</div>))
        }
      </Fragment>
    );
  }
}
