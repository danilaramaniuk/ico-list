import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export default (Component, action, type) => {
  class Wrapper extends PureComponent {
    static propTypes = {
      initialLoad: PropTypes.func.isRequired,
    };

    componentDidMount() {
      const { initialLoad } = this.props;
      initialLoad(type);
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return connect(
    null,
    { initialLoad: action.fetchContributionsByCurrency },
  )(Wrapper);
};
