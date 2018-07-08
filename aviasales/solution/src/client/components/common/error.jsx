// @flow
import * as React from 'react';
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

type Props = {
  onRetry: (event: SyntheticMouseEvent<HTMLButtonElement>) => void,
  message?: string,
};

const FetchError = ({ onRetry, message }: Props) => (
  <Message>
    <h2>Билеты загрузить не удалось <span role="img" aria-labelledby="sad">😥</span> ({message})</h2>
    <RetryButton onClick={onRetry}>Повторить</RetryButton>
  </Message>
);

FetchError.defaultProps = {
  message: '',
};

export default FetchError;
