import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import Card from './card';

const BarWrapper = styled.div`
  height: 400px;
  margin: 32px 20px;
  background: white;
  border-radius: 8px;
  padding: 20px 20px 60px 20px;
`;

const IconWrapper = styled.div`
  display: flex;
`;

const IconLabel = styled.div`
  line-height: 38px;
  margin-left: 8px;
  font-size: 24px;
`;

export default class CryptocurrencyBar extends PureComponent {
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
    color: PropTypes.string.isRequired,
    Icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  };

  onBarClick = (dataset) => {
    const { setBarIndex } = this.props;

    if (dataset.length > 0) {
      setBarIndex(dataset[0]._index);
    }
  }

  render() {
    const {
      contributions, label, barIndex, color, Icon,
    } = this.props;

    const data = {
      labels: contributions.map((item, index) => index + 1),
      datasets: [
        {
          data: contributions.map(({ value }) => value),
          label,
          backgroundColor: color,
          borderWidth: 1,
        },
      ],
    };

    if (contributions.length === 0) {
      return <div>No data</div>;
    }

    return (
      <Fragment>
        <BarWrapper>
          <IconWrapper>
            <Icon /> <IconLabel>{label}</IconLabel>
          </IconWrapper>
          <Bar
            data={data}
            getElementAtEvent={this.onBarClick}
            width={100}
            options={{
              maintainAspectRatio: false,
            }}
          />
        </BarWrapper>
        <Card item={contributions[barIndex]} index={barIndex} />
      </Fragment>
    );
  }
}
