import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuItemWrapper = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  margin: auto 0;
`;

const MenuItem = styled.div`
  height: 50px;
  line-height: 50px;
  padding: 12px;
  font-size: 32px;
  border-bottom: 4px solid;
  cursor: pointer;
`;

export class MenuItemComponent extends PureComponent {
  static propTypes = {
    currency: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    Icon: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  };

  static defaultProps = {
    Icon: null,
  }

  onClick = () => {
    const { currency, onClick } = this.props;
    onClick(currency);
  }

  render() {
    const { title, Icon } = this.props;

    return (
      <MenuItemWrapper>
        <IconWrapper>
          {Icon && <Icon />}
        </IconWrapper>
        <MenuItem onClick={this.onClick}>{title}</MenuItem>
      </MenuItemWrapper>
    );
  }
}

export default MenuItemComponent;
