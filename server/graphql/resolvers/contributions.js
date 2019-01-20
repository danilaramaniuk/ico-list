import contributionsList from '../../contributions.json';
import currencyTypes from '../../currency-types';

const contributions = ({ currency }) => {
  if (currencyTypes.includes(currency)) {
    return contributionsList.filter(item => item.currency === currency);
  }

  return contributionsList;
};

export default contributions;
