import { connect } from 'react-redux';
import theme from '~/main-theme';
import { EthereumIcon } from '~/common/icons';
import { actions, Component } from './builder';

const mapStateToProps = ({ icoDashboard }) => ({
  contributions: icoDashboard.ethData.contributions,
  barIndex: icoDashboard.ethData.barIndex,
  color: theme.palette.primary.pink,
  Icon: EthereumIcon,
  label: 'Ethereum',
});

const mapDispatchToProps = {
  setBarIndex: actions.setBarIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
