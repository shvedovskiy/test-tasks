// @flow
import React from 'react';

import Currency from './currency/currency';
import Filters from './filters/filters';
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
      )}
      />
    </FiltersSettings>
  </SettingsContainer>
);

export default Settings;
