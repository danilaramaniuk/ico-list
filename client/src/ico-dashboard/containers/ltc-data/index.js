import { connect } from 'react-redux';
import { CryptocurrencyBar } from '../../components';
import { actions } from './builder';

const mapStateToProps = ({ icoDashboard }) => ({
  contributions: icoDashboard.ltcData.contributions,
  barIndex: icoDashboard.ltcData.barIndex,
  label: 'Litecoin',
});

const mapDispatchToProps = {
  setBarIndex: actions.setBarIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(CryptocurrencyBar);
