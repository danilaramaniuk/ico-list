import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';
import styled from 'styled-components';
import {
  BitcoinIcon,
  EthereumIcon,
  LitecoinIcon,
} from '~/common/icons';
import theme from '~/main-theme';

import 'react-input-range/lib/css/index.css';
import {
  setValue as setValueAction,
  fetchContributions as fetchContributionsAction,
} from './actions';
import { Card, IconLabel } from '../../components';
import { BTC, LTC, ETH } from '../../constants';

const InputRangeWrapper = styled.div`
  margin: 32px 16px;
  width: 400px;
`;

const Header = styled.div`
  display: flex;
  margin: 32px 20px;
`;

const IconsWrapper = styled.div`
  flex: 1;
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
    fetchContributions: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { fetchContributions } = this.props;
    fetchContributions();
  }

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
      return null;
    }

    return (
      <Fragment>
        <Header>
          <IconsWrapper>
            <IconLabel Icon={BitcoinIcon} label={`Bitcoin ${this.getAmount(BTC)}`} iconColor={theme.palette.primary.blue100} />
            <IconLabel Icon={LitecoinIcon} label={`Litecoin ${this.getAmount(LTC)}`} iconColor={theme.palette.primary.blue100} />
            <IconLabel Icon={EthereumIcon} label={`Ethereum ${this.getAmount(ETH)}`} iconColor={theme.palette.primary.blue100} />
          </IconsWrapper>
          <InputRangeWrapper>
            <InputRange
              maxValue={range.max}
              minValue={range.min}
              value={value}
              onChange={setValue}
            />
          </InputRangeWrapper>
        </Header>
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
  contributions: icoDashboard.results.contributions,
  range: icoDashboard.results.range,
  value: icoDashboard.results.value,
});


export default connect(
  mapStateToProps,
  {
    setValue: setValueAction,
    fetchContributions: fetchContributionsAction,
  },
)(Results);
