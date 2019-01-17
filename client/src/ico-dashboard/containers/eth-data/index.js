import { connect } from 'react-redux';
import { CryptocurrencyContent } from '../../components';
import { actions } from './builder';

const mapStateToProps = ({ icoDashboard }) => ({
  contributions: icoDashboard.ethData.contributions,
  barIndex: icoDashboard.ethData.barIndex,
  label: 'Ethereum',
});

const mapDispatchToProps = {
  setBarIndex: actions.setBarIndex,
};

export default connect(mapStateToProps, mapDispatchToProps)(CryptocurrencyContent);
