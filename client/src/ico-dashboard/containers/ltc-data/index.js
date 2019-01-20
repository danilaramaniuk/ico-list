import { connect } from 'react-redux';
import theme from '~/main-theme';
import { LitecoinIcon } from '~/common/icons';
import { actions, Component } from './builder';

const mapStateToProps = ({ icoDashboard }) => ({
  contributions: icoDashboard.ltcData.contributions,
  barIndex: icoDashboard.ltcData.barIndex,
  color: theme.palette.primary.turquoise,
  Icon: LitecoinIcon,
  label: 'Litecoin',
});

const mapDispatchToProps = {
  setBarIndex: actions.setBarIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
