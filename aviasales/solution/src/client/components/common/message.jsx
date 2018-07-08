// @flow
import * as React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const MessageContent = styled.span`
  text-align: center;
  font-size: 22px;
  line-height: 35px;
  
`;

type Props = {
  children: React.Node,
};

const Message = ({ children }: Props) => (
  <MessageContainer>
    <MessageContent>
      {children}
    </MessageContent>
  </MessageContainer>
);

export default Message;
