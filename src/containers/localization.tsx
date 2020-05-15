import React from 'react';
import EN from '../locales/en.json';

type ILocalization = {
  [key: string]: string;
};

type TLocalizations = {
  [key: string]: ILocalization;
};

export interface LocalizationProp {
  localization: ILocalization;
}

const localizations: TLocalizations = {
  en: EN,
};

const currentLocalization: ILocalization = localizations['en'];

export function withLocalization<P>(
  WrappedComponent: React.ComponentType<P & LocalizationProp>
) {
  return (props: P) => (
    <WrappedComponent {...props} localization={currentLocalization} />
  );
}
