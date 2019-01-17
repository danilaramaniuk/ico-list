import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';
import styled from 'styled-components';

import 'react-input-range/lib/css/index.css';
import { Card } from '../../components';
import { BTC, LTC, ETH } from '../../constants';

const InputRangeWrapper = styled.div`
  margin: 32px 16px;
  width: 400px;
`;

export class Results extends PureComponent {
  static propTypes = {
    contributions: PropTypes.arrayOf(PropTypes.shape({
      address: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      txid: PropTypes.string.isRequired,
    })).isRequired,
  };

  state = {
    value: { min: 0, max: this.max },
  };

  getAmount = (type) => {
    const { contributions } = this.props;

    return contributions
      .filter(({ currency }) => (currency === type))
      .reduce((memo, item) => (memo + item.value), 0);
  }

  get max() {
    const { contributions } = this.props;

    return Math.max(...contributions.map(item => item.value));
  }

  setRange = value => this.setState({ value });

  render() {
    const { contributions } = this.props;
    const { value: { min, max } } = this.state;

    if (contributions.length === 0) {
      return <div>No data</div>;
    }

    return (
      <Fragment>
        <div><b>Bitcoin</b>: {this.getAmount(BTC)}</div>
        <div><b>Litecoin</b>: {this.getAmount(LTC)}</div>
        <div><b>Ethereum</b>: {this.getAmount(ETH)}</div>
        <InputRangeWrapper>
          <InputRange
            maxValue={this.max}
            minValue={0}
            value={this.state.value}
            onChange={this.setRange}
          />
        </InputRangeWrapper>
        {
          contributions
            .filter(({ value }) => (value >= min && value <= max))
            .map(item => <Card item={item} key={item.txid} />)
        }
      </Fragment>
    );
  }
}

const mapStateToProps = ({ icoDashboard }) => ({
  contributions: icoDashboard.common.contributions,
});


export default connect(mapStateToProps)(Results);
