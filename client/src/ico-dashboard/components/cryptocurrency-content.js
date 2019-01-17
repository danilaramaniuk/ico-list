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
    label: PropTypes.string.isRequired,
    barIndex: PropTypes.number.isRequired,
    setBarIndex: PropTypes.func.isRequired,
  };

  onBarClick = (dataset) => {
    const { setBarIndex } = this.props;

    if (dataset.length > 0) {
      setBarIndex(dataset[0]._index);
    }
  }

  render() {
    const { contributions, label, barIndex } = this.props;

    const data = {
      labels: contributions.map((item, index) => index + 1),
      datasets: [
        {
          data: contributions.map(({ value }) => value),
          label,
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
        },
      ],
    };

    if (contributions.length === 0) {
      return <div>No data</div>;
    }

    const {
      address, currency, value, txid,
    } = contributions[barIndex];

    return (
      <Fragment>
        <BarWrapper>
          <Bar
            data={data}
            getElementAtEvent={this.onBarClick}
            width={100}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </BarWrapper>
        <div>
          <div>bar number: { barIndex + 1 }</div>
          <div>address: { address }</div>
          <div>currency: { currency }</div>
          <div>value: { value }</div>
          <div>txid: { txid }</div>
        </div>
      </Fragment>
    );
  }
}
