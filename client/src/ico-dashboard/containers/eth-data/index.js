import { connect } from 'react-redux';
import { CryptocurrencyContent } from '../../components';

const mapStateToProps = ({ icoDashboard }) => ({
  contributions: icoDashboard.ethData.contributions,
  label: 'Ethereum',
});

export default connect(mapStateToProps)(CryptocurrencyContent);
