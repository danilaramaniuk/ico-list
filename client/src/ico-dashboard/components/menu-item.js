import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  };

  onClick = () => {
    const { currency, onClick } = this.props;
    onClick(currency);
  }

  render() {
    const { title } = this.props;

    return (
      <MenuItem onClick={this.onClick}>{title}</MenuItem>
    );
  }
}

export default MenuItemComponent;
