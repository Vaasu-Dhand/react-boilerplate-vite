/**
 * i18n.mjs
 *
 * This will setup the i18n language files and locale data for your app.
 *
 * This file is using '.mjs' extension. Follow mjs Import/Export syntax
 * Imports should have extensions included
 *
 *   IMPORTANT: This file is used by the internal build
 *   script `extract-intl`, It has a --experimental-json-modules flag
 *   because this file is importing a json file.
 */

// const addLocaleData = require('react-intl').addLocaleData; //eslint-disable-line
import { addLocaleData } from 'react-intl';
// const enLocaleData = require('react-intl/locale-data/en');
import enLocaleData from 'react-intl/locale-data/en.js'; // eslint-disable-line

// const enTranslationMessages = require('./translations/en.json');
import enTranslationMessages from './translations/en.json';

addLocaleData(enLocaleData);

export const DEFAULT_LOCALE = 'en';

// prettier-ignore
export const appLocales = [
  'en',
];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
};

// exports.appLocales = appLocales;
// exports.formatTranslationMessages = formatTranslationMessages;
// exports.translationMessages = translationMessages;
// exports.DEFAULT_LOCALE = DEFAULT_LOCALE;
