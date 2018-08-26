import styled from 'styled-components';


export const StopsListItem = styled.li`
  position: relative;
  outline: none;

  &:hover,
  &:focus-within {
    background-color: var(--brand-light-blue);
  }
`;
export const StopsList = styled.ul`
  font-size: 13px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  height: 36px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;

  &::after {
    content: '';
    height: 100%;
    width: 15px;
    position: absolute;
    top: 0;
    right: 15px;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.001), var(--container-background) 85%);
  }

  ${StopsListItem}:hover &::after,
  &:focus-within::after {
    background: linear-gradient(90deg, rgba(255, 255, 255, 0.001), var(--brand-light-blue) 85%);
  }
`;

export const LabelText = styled.span`
  overflow: hidden;
`;
