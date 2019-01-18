import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MenuItemWrapper = styled.div`
  display: flex;
  border-bottom: 4px solid ${props => props.theme.palette.primary.blue100};
  margin-left: 40px;
`;

const IconWrapper = styled.div`
  margin: auto 0;
`;

const EmptySpace = styled.div`
  width: 38px;
`;

const MenuItem = styled.div`
  width: 100%;
  height: 80px;
  line-height: 80px;
  margin: 12px;
  font-size: 32px;
  color: ${props => props.theme.palette.primary.grey};
  ${props =>
    props.isActive &&
    `
    color: ${props.theme.palette.primary.blue300};
    border-right: 4px solid ${props.theme.palette.primary.blue200};
  `};
  cursor: pointer;
`;

export class MenuItemComponent extends PureComponent {
  static propTypes = {
    currency: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired,
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
    const { title, Icon, isActive } = this.props;

    return (
      <MenuItemWrapper>
        <IconWrapper>
          {Icon ? <Icon /> : <EmptySpace />}
        </IconWrapper>
        <MenuItem isActive={isActive} onClick={this.onClick}>{title}</MenuItem>
      </MenuItemWrapper>
    );
  }
}

export default MenuItemComponent;
