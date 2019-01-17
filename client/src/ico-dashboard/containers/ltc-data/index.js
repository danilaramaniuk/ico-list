import { connect } from 'react-redux';
import { CryptocurrencyContent } from '../../components';

const mapStateToProps = ({ icoDashboard }) => ({
  contributions: icoDashboard.ltcData.contributions,
  label: 'Litecoin',
});

export default connect(mapStateToProps)(CryptocurrencyContent);
