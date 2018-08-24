// @flow
import React from 'react';

import CurrencyContainer from './currency/currency';
import FiltersContainer from './filters/filters';
import {
  SettingsContainer,
  CurrencySettings,
  FiltersSettings,
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
    <FiltersSettings>
      <FiltersContainer render={(title, child) => (
        <li>
          <Title>
            <TitleText>{title}</TitleText>
          </Title>
          {child}
        </li>
      )}
      />
    </FiltersSettings>
  </SettingsContainer>
);

export default Settings;
