import { connect } from 'react-redux';
import { CryptocurrencyBar } from '../../components';
import { actions } from './builder';

const mapStateToProps = ({ icoDashboard }) => ({
  contributions: icoDashboard.btcData.contributions,
  barIndex: icoDashboard.btcData.barIndex,
  label: 'Bitcoin',
});

const mapDispatchToProps = {
  setBarIndex: actions.setBarIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(CryptocurrencyBar);
