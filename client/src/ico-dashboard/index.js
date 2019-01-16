import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ContributionModel from '~/common/models/contribution';
import { setItems as setItemsAction } from './actions';

const ICODashboardWrapper = styled.div`
  display: flex;
  height: 100%;
`;

const Menu = styled.div`
  min-width: 200px;
  border-right: 4px solid;
`;

const MenuItem = styled.div`
  height: 50px;
  line-height: 50px;
  padding: 12px;
  font-size: 32px;
  border-bottom: 4px solid;
  cursor: pointer;
`;

const Content = styled.div`
  width: 100%;
  overflow: auto;
  padding: 4px 16px;
`;

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

  componentDidMount = async () => {
    const { setItems } = this.props;
    const response = await ContributionModel.getAllContribution();
    const { data } = await response.json();

    setItems(data.contributions);
  }

  render() {
    const { contributions } = this.props;

    return (
      <ICODashboardWrapper>
        <Menu>
          <MenuItem>Bitcoin</MenuItem>
          <MenuItem>Ethereum</MenuItem>
          <MenuItem>Litecoin</MenuItem>
          <MenuItem>Common</MenuItem>
        </Menu>
        <Content>
          {
            contributions.map(({ currency, value, txid }) =>
              (<div key={txid}>{currency} - {value}</div>))
          }
        </Content>
      </ICODashboardWrapper>
    );
  }
}

const mapStateToProps = ({ icoDashboard }) => ({
  contributions: icoDashboard.contributions,
});

const mapDispatchToProps = {
  setItems: setItemsAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ICODashboard);
