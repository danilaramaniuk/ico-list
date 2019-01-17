import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Card } from '../../components';
import { BTC, LTC, ETH } from '../../constants';

export class Results extends PureComponent {
  static propTypes = {
    contributions: PropTypes.arrayOf(PropTypes.shape({
      address: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      txid: PropTypes.string.isRequired,
    })).isRequired,
  };

  getAmount = (type) => {
    const { contributions } = this.props;

    return contributions
      .filter(({ currency }) => (currency === type))
      .reduce((memo, item) => (memo + item.value), 0);
  }

  render() {
    const { contributions } = this.props;

    return (
      <Fragment>
        <div><b>Bitcoin</b>: {this.getAmount(BTC)}</div>
        <div><b>Litecoin</b>: {this.getAmount(LTC)}</div>
        <div><b>Ethereum</b>: {this.getAmount(ETH)}</div>
        {contributions.map(item => <Card item={item} key={item.txid} />)}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ icoDashboard }) => ({
  contributions: icoDashboard.common.contributions,
});


export default connect(mapStateToProps)(Results);
