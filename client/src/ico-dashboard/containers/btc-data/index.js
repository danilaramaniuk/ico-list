import { connect } from 'react-redux';
import theme from '~/main-theme';
import { BitcoinIcon } from '~/common/icons';
import { actions, Component } from './builder';

const mapStateToProps = ({ icoDashboard }) => ({
  contributions: icoDashboard.btcData.contributions,
  barIndex: icoDashboard.btcData.barIndex,
  color: theme.palette.primary.orange,
  Icon: BitcoinIcon,
  label: 'Bitcoin',
});

const mapDispatchToProps = {
  setBarIndex: actions.setBarIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
