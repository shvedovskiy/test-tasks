// @flow
import React from 'react';

import CurrencyContainer from './currency/currency';
import FiltersContainer from './filters/filters';
import {
  SettingsContainer,
  SettingsElement,
  CurrencySettings,
  Title,
  TitleText,
} from './styled';


const Settings = () => (
  <SettingsContainer>
    <CurrencySettings>
      <Title>
        <TitleText>Валюта</TitleText>
      </Title>
      <CurrencyContainer />
    </CurrencySettings>
    <SettingsElement as="ul">
      <FiltersContainer render={(title, child) => (
        <li>
          <Title>
            <TitleText>{title}</TitleText>
          </Title>
          {child}
        </li>
      )}
      />
    </SettingsElement>
  </SettingsContainer>
);

export default Settings;
