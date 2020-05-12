import React, { Component } from 'react';
import EN from '../locales/en.json';

// ! TODO
type ILocalization = any;

type TLocalizations = {
  en: ILocalization;
};

// !
export interface LocalizationProp {
  localization?: ILocalization;
}

const localizations: TLocalizations = {
  en: EN,
};

const currentLocalization: ILocalization = localizations['en'];

export function withLocalization<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  return class extends Component<P & LocalizationProp> {
    render() {
      return <WrappedComponent {...this.props} localization={currentLocalization} />;
    }
  };
}
