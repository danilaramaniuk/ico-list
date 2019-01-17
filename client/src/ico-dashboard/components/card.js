import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled.div`
    padding: 16px;
    border: 1px solid;
    border-radius: 8px;
    margin: 8px 0;
`;

export default class Card extends PureComponent {
  static propTypes = {
    item: PropTypes.shape({
      address: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      txid: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number,
  };

  static defaultProps = {
    index: null,
  };

  render() {
    const { item, index } = this.props;

    const {
      address, currency, value, txid,
    } = item;

    return (
      <CardWrapper>
        { index !== null && <div>bar number: { index + 1 }</div> }
        <div>address: { address }</div>
        <div>currency: { currency }</div>
        <div>value: { value }</div>
        <div>txid: { txid }</div>
      </CardWrapper>
    );
  }
}
