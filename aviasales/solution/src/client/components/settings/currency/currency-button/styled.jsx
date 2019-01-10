import styled, { css } from 'styled-components';


export const SwitchButton = styled.span`
  flex-grow: 1;
  position: relative;
  height: 40px;
  line-height: 40px;
  background-color: ${({ checked }) => (checked ? 'var(--brand-blue)' : '#fff')};
  border: 1px solid ${({ checked }) => (checked ? 'var(--brand-blue)' : 'var(--brand-gray)')};
  color: ${({ checked }) => (checked ? '#fff' : 'var(--brand-blue)')};
  text-align: center;
  letter-spacing: .5px;
  transition: all .3s ease;
  cursor: pointer;
  outline: none;
  z-index: ${({ checked }) => (checked ? '3' : '1')};

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  &:not(:first-child) {
    margin-left: -1px;
  }

  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  &:focus-within {
     box-shadow: inset 0 0 0 1px #fff;
  }

  ${({ checked }) => !checked ? css`
    &:hover {
       background-color: var(--brand-light-blue);
       border-color: var(--brand-blue);
       z-index: 2;
    }
  ` : ''}
`;

export const Radio = styled.input.attrs({
  type: 'radio',
})`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  opacity: 0;
  z-index: 2;
  cursor: pointer;
`;

export const RadioLabel = styled.label`
  z-index: 1;
`;
