import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const IconWrapper = styled.div`
  display: flex;
`;

const IconLabel = styled.div`
  line-height: 38px;
  margin-left: 8px;
  font-size: 24px;
`;

export default class CryptocurrencyBar extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    Icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
    iconColor: PropTypes.string,
  };

  static defaultProps = {
    iconColor: 'white',
  };

  render() {
    const {
      label, Icon, iconColor,
    } = this.props;

    return (
      <IconWrapper>
        <Icon iconColor={iconColor} /> <IconLabel>{label}</IconLabel>
      </IconWrapper>
    );
  }
}
