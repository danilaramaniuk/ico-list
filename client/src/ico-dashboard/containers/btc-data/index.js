import { connect } from 'react-redux';
import { CryptocurrencyContent } from '../../components';

const mapStateToProps = ({ icoDashboard }) => ({
  contributions: icoDashboard.btcData.contributions,
});

export default connect(mapStateToProps)(CryptocurrencyContent);
