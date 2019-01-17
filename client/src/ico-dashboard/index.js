import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ContributionModel from '~/common/models/contribution';
import { setItems as setItemsAction } from './actions';
import { CryptocurrencyContent, Menu, MenuItem } from './components';
import { BTC, LTC, ETH } from './constants';

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
];

export class ICODashboard extends PureComponent {
  static propTypes = {
    contributions: PropTypes.arrayOf(PropTypes.shape({
      address: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      txid: PropTypes.string.isRequired,
    })).isRequired,
    setItems: PropTypes.func.isRequired,
  };

  state = {
    currentTab: BTC,
  }

  componentDidMount = async () => {
    const { setItems } = this.props;
    const response = await ContributionModel.getAllContribution();
    const { data } = await response.json();

    setItems(data.contributions);
  }

  get contributions() {
    const { contributions } = this.props;
    const { currentTab } = this.state;

    return contributions.filter(({ currency }) => currency === currentTab);
  }

  get menuItems() {
    return menuItems.map(({ title, currency }) => (<MenuItem
      title={title}
      onClick={this.clickMenuItem}
      key={title}
      currency={currency}
    />));
  }

  clickMenuItem = (currentTab) => {
    this.setState({
      currentTab,
    });
  };

  render() {
    return (
      <ICODashboardWrapper>
        <Menu>
          {this.menuItems}
        </Menu>
        <Content>
          <CryptocurrencyContent contributions={this.contributions} />
        </Content>
      </ICODashboardWrapper>
    );
  }
}

const mapStateToProps = ({ icoDashboard }) => ({
  contributions: icoDashboard.common.contributions,
});

const mapDispatchToProps = {
  setItems: setItemsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ICODashboard);
