import React from 'react';
import styled from 'styled-components';

/* eslint-disable import/no-unresolved, import/extensions */
import Currency from './currency';
import Filters from './filters';
/* eslint-enable import/no-unresolved, import/extensions */


const SettingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 15px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 1px 4px rgba(91, 137, 164, .25);
  overflow: hidden;
  
  @media screen and (max-width: 870px) {
    max-width: 750px;
  }
`;

const SettingsElement = styled.div`
  flex-basis: 230px;
  flex-grow: 0;
  overflow: hidden;
  
  @media screen and (max-width: 870px) {
    flex-grow: 1;
  }
`;

const CurrencySettings = SettingsElement.extend`
  margin-bottom: 35px;
`;

const FiltersSettings = SettingsElement.withComponent('ul');

const Title = styled.div`
  margin-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: .5px;
`;

const TitleText = styled.h4`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Settings = () => (
  <SettingsContainer>
    <CurrencySettings>
      <Title>
        <TitleText>Валюта</TitleText>
      </Title>
      <Currency />
    </CurrencySettings>

    <FiltersSettings>
      <Filters render={(title, child) => (
        <li>
          <Title>
            <TitleText>{title}</TitleText>
          </Title>
          {child}
        </li>
      )} />
    </FiltersSettings>
  </SettingsContainer>
);

export default Settings;
