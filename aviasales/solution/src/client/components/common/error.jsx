// @flow
import * as React from 'react';
import styled from 'styled-components';

import Message from './message';


const RetryButton = styled.a.attrs({
  role: 'button',
  tabIndex: '0',
})`
  display: inline-block;
  margin-top: 18px;
  padding: 0 5px;
  color: #2196f3;
  font-size: 18px;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  transition: color .25s;
  outline: none;
  
  &:hover,
  &:focus {
    color: #ff9d1b;
  }
  
  &:focus {
    outline: 2px solid #2196f3;
  }
`;

type Props = {
  onRetry: (event: SyntheticMouseEvent<HTMLButtonElement>) => void,
  message?: string,
};

const FetchError = ({ onRetry, message }: Props) => (
  <Message>
    <h2>
      <span>Билеты загрузить не удалось</span>{' '}
      <span role="img">😥</span>{' '}
      ({message})
    </h2>
    <RetryButton onClick={onRetry}>Повторить</RetryButton>
  </Message>
);

FetchError.defaultProps = {
  message: '',
};

export default FetchError;
