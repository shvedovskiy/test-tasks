import styled from 'styled-components';


export const SettingsContainer = styled.div.attrs({
  role: 'toolbar',
})`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 15px;
  background-color: var(--container-background);
  border-radius: 5px;
  box-shadow: 0 1px 4px var(--blue-shadow-color);
  overflow: hidden;

  @media screen and (max-width: 870px) {
    max-width: 750px;
  }
`;

export const SettingsElement = styled.div`
  flex-basis: 230px;
  flex-grow: 0;
  overflow: hidden;

  @media screen and (max-width: 870px) {
    flex-grow: 1;
  }
`;

export const CurrencySettings = styled(SettingsElement)`
  margin-bottom: 35px;
`;

export const Title = styled.div`
  margin-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .5px;
`;

export const TitleText = styled.h4`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
