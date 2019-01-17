import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';
import styled from 'styled-components';

import 'react-input-range/lib/css/index.css';
import { setValue as setValueAction } from './actions';
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
    setValue: PropTypes.func.isRequired,
    range: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    }).isRequired,
    value: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    }).isRequired,
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


  render() {
    const {
      contributions, setValue, range, value,
    } = this.props;

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
            maxValue={range.max}
            minValue={range.min}
            value={value}
            onChange={setValue}
          />
        </InputRangeWrapper>
        {
          contributions
            .filter(item => (item.value >= value.min && item.value <= value.max))
            .map(item => <Card item={item} key={item.txid} />)
        }
      </Fragment>
    );
  }
}

const mapStateToProps = ({ icoDashboard }) => ({
  contributions: icoDashboard.common.contributions,
  range: icoDashboard.results.range,
  value: icoDashboard.results.value,
});


export default connect(mapStateToProps, { setValue: setValueAction })(Results);
