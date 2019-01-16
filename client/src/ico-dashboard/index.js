import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ContributionModel from '~/common/models/contribution';
import { setItems as setItemsAction } from './actions';

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
      <div>
        {
          contributions.map(({ currency, value, txid }) =>
            (<div key={txid}>{currency} - {value}</div>))
        }
      </div>
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
