import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {
  fetchInitialData as fetchInitialDataAction,
  setCurrentTab as setCurrentTabAction,
} from './actions';
import { Menu, MenuItem } from './components';
import { BTC, LTC, ETH, ALL } from './constants';
import BTCContent from './containers/btc-data';
import LTCContent from './containers/ltc-data';
import ETHContent from './containers/eth-data';
import ResultsContent from './containers/results';

const ICODashboardWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Content = styled.div`
  width: 100%;
  overflow: auto;
  padding: 16px;
`;

const menuItems = [
  {
    title: 'Bitcoin',
    currency: BTC,
  },
  {
    title: 'Litecoin',
    currency: LTC,
  },
  {
    title: 'Ethereum',
    currency: ETH,
  },
  {
    title: 'Results',
    currency: ALL,
  },
];

export class ICODashboard extends PureComponent {
  static propTypes = {
    fetchInitialData: PropTypes.func.isRequired,
    setCurrentTab: PropTypes.func.isRequired,
    currentTab: PropTypes.string.isRequired,
  };

  componentDidMount = async () => {
    const { fetchInitialData } = this.props;

    fetchInitialData();
  }

  get menuItems() {
    const { setCurrentTab } = this.props;

    return menuItems.map(({ title, currency }) => (<MenuItem
      title={title}
      onClick={setCurrentTab}
      key={title}
      currency={currency}
    />));
  }

  render() {
    const { currentTab } = this.props;

    return (
      <ICODashboardWrapper>
        <Menu>
          {this.menuItems}
        </Menu>
        <Content>
          { currentTab === BTC && <BTCContent />}
          { currentTab === LTC && <LTCContent />}
          { currentTab === ETH && <ETHContent />}
          { currentTab === ALL && <ResultsContent />}
        </Content>
      </ICODashboardWrapper>
    );
  }
}

const mapStateToProps = ({ icoDashboard }) => ({
  currentTab: icoDashboard.common.currentTab,
});

const mapDispatchToProps = {
  fetchInitialData: fetchInitialDataAction,
  setCurrentTab: setCurrentTabAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ICODashboard);
