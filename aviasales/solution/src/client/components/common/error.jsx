import React from 'react';
import styled from 'styled-components';

import Message from './message';


const RetryButton = styled.a.attrs({
  role: 'button',
})`
  display: block;
  margin-top: 18px;
  color: #2196f3;
  font-size: 18px;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  transition: color .15s;
  
  &:hover,
  &:focus {
    color: #ff9d1b;
    outline: none;
  }
`;

const FetchError = ({ message, onRetry }) => (
  <Message>
    <h2>Билеты загрузить не удалось 😥</h2>
    <RetryButton onClick={onRetry}>Повторить</RetryButton>
  </Message>
);

FetchError.defaultProps = {
  message: '',
};

export default FetchError;
