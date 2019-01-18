import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardWrapper = styled.div`
  padding: 36px 26px 20px 26px;
  border-radius: 8px;
  margin: 8px 0;
  display: flex;
  background: white;
  margin: 32px 20px;
`;

const VerticalValue = styled.div`
  width: 15%;
`;

const Title = styled.div`
  color: ${props => props.theme.palette.primary.blue400};
  text-transform: uppercase;
  margin-bottom: 16px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Value = styled.div`
  margin-bottom: 16px;
  color: ${props => props.theme.palette.primary.grey};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const HorizontalValues = styled.div`
  overflow: hidden;
  flex: 1;
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
        {
          index !== null && (
            <VerticalValue>
              <Title>index</Title>
              <Value>{ index + 1 }</Value>
            </VerticalValue>
          )
        }
        <VerticalValue>
          <Title>currency</Title>
          <Value>{ currency }</Value>
        </VerticalValue>
        <VerticalValue>
          <Title>value</Title>
          <Value>{ value }</Value>
        </VerticalValue>
        <VerticalValue>
          <Title>address</Title>
          <Title>txid</Title>
        </VerticalValue>
        <HorizontalValues>
          <Value>{ address }</Value>
          <Value>{ txid }</Value>
        </HorizontalValues>
      </CardWrapper>
    );
  }
}
