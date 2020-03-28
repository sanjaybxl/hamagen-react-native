import DeviceInfo from 'react-native-device-info';
import axios, { AxiosResponse } from 'axios';
import { onError } from '../services/ErrorService';
import DefaultConfig from './default_config.json';
import { Config } from '../types';

// @ts-ignore
const env: 'com.ino.covid.dev' | 'com.ino.covid.qa' | 'com.ino.covid' = DeviceInfo.getBundleId();

let config: Config = {
  "dataUrl": "https://shield-354b2.firebaseio.com/points.json",
  "stringsUrl": "https://matrixdemos.blob.core.windows.net/mabar/texts.json",
  "versionsUrl": "https://matrixdemos.blob.core.windows.net/mabar/versions.json",
  "sampleDistance": 50,
  "sampleInterval": 1000,
  "fetchMilliseconds": 6000,
  "meterRadius": 500,
  "intersectMilliseconds": 1,
  "bufferUnits": "meter",
  "sickGeometryLongIndex": 0,
  "sickGeometryLatIndex": 1,
  "sickMessage": {
    "he": {
      "title": "יתכן כי זוהתה חשיפה אחת או יותר",
      "body": "יש ללחוץ כאן כדי לברר אם נחשפת"
    },
    "en": {
      "title": "One or more exposures may have been detected",
      "body": "Click here to find out if you have been exposed"
    },
    "am": {
      "title": "አንድ ወይም ከዚያ በላይ ተጋላጭነቶች ተከስተው ሊሆን ይችላል",
      "body": "የተጋለጡ መሆንዎን ለማወቅ እዚህ ጠቅ ያድርጉ"
    },
    "ru": {
      "title": "Возможно, обнаружено одно или несколько совпадений",
      "body": "Нажмите здесь, чтобы узнать, если вы были выставлены"
    },
    "ar": {
      "title": "ربما تم الكشف عن تداخل واحد أو أكثر",
      "body": "انقر هنا لمعرفة ما إذا كنت قد تعرضت"
    },
    "duration": 10000
  },
  "furtherInstructions": {
    "he": "https://govextra.gov.il/ministry-of-health/corona/corona-virus/",
    "en": "https://govextra.gov.il/ministry-of-health/corona/corona-virus-en/",
    "am": "https://govextra.gov.il/ministry-of-health/corona/corona-virus/",
    "ru": "https://govextra.gov.il/ministry-of-health/corona/corona-virus-ru",
    "ar": "https://govextra.gov.il/ministry-of-health/corona/corona-virus-ar/"
  },
  "reportForm": {
    "he": "https://govforms.gov.il/mw/forms/QuarantineForExposees%40health.gov.il",
    "en": "https://govforms.gov.il/mw/forms/QuarantineForExposees%40health.gov.il",
    "am": "https://govforms.gov.il/mw/forms/QuarantineForExposees%40health.gov.il",
    "ru": "https://govforms.gov.il/mw/forms/QuarantineForExposees%40health.gov.il",
    "ar": "https://govforms.gov.il/mw/forms/QuarantineForExposees%40health.gov.il"
  },
  "usageTerms": {
    "he": "https://go.gov.il/magen-terms-he",
    "en": "https://go.gov.il/magen-terms-en",
    "ar": "https://go.gov.il/magen-terms-ar",
    "ru": "https://go.gov.il/magen-terms-ru",
    "am": "https://go.gov.il/magen-terms-am"
  },
  "selfAssessment": {
    "en": "https://covid-selftest.netlify.com/"
  },
  "privacyTerms": {
    "he": "https://go.gov.il/HAMAGEN",
    "en": "https://go.gov.il/HAMAGEN-EN",
    "ar": "https://go.gov.il/HAMAGEN-AR",
    "ru": "https://go.gov.il/HAMAGEN-RU",
    "am": "https://go.gov.il/HAMAGEN-AM"
  }
}

export const initConfig = async () => new Promise(async (resolve) => {
  try {
    const res: AxiosResponse = await axios.get(`https://gisweb.azureedge.net/get_config.json?r=${Math.random()}`, { headers: { 'Content-Type': 'application/json;charset=utf-8' } });
    const { data } = await axios.get(`${res.data[env]}?r=${Math.random()}`, { headers: { 'Content-Type': 'application/json;charset=utf-8' } });
    config;
    resolve();
  } catch (error) {
    resolve();
    onError({ error });
  }
});

export default function () {
  return config;
}