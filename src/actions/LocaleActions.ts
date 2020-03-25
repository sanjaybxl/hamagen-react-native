import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { NativeModules } from 'react-native';
import { onError } from '../services/ErrorService';
import LocaleData from '../locale/LocaleData';
import config from '../config/config';
import { TOGGLE_CHANGE_LANGUAGE, LOCALE_CHANGED, INIT_LOCALE } from '../constants/ActionTypes';
import { CURRENT_LOCALE, IS_IOS } from '../constants/Constants';
import texts from '../locale/texts.json';

export const toggleChangeLanguage = (isShow: boolean) => (dispatch: any) => dispatch({ type: TOGGLE_CHANGE_LANGUAGE, payload: isShow });

export const initLocale = () => async (dispatch: any) => {
  try {
    const locale = IS_IOS ? NativeModules.SettingsManager.settings.AppleLocale : NativeModules.I18nManager.localeIdentifier;

    let activeLocale: 'he' | 'iw' | 'en' | 'ar' | 'am' | 'ru' = (await AsyncStorage.getItem(CURRENT_LOCALE) || locale).substr(0, 2);

    if (activeLocale === 'iw') {
      activeLocale = 'en';
    }

    await AsyncStorage.setItem(CURRENT_LOCALE, activeLocale);

    dispatch({
      type: INIT_LOCALE,
      payload: {
        strings: texts.en,
        locale: 'en',
        isRTL: ['he', 'ar'].includes(activeLocale),
        localeData: texts.en
      }
    });
  } catch (error) {
    dispatch({ type: LOCALE_CHANGED, payload: { strings: LocaleData.en, locale: 'en', isRTL: true } });
    onError({ error });
  }
};

export const changeLocale = (locale: 'he' | 'en' | 'ar' | 'am' | 'ru') => async (dispatch: any) => {
  try {
    await AsyncStorage.setItem(CURRENT_LOCALE, locale);
    dispatch({ type: LOCALE_CHANGED, payload: { locale } });
  } catch (error) {
    onError({ error });
  }
};
