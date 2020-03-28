import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity, Text, Icon, ChangeLanguageButton } from '../common';
import {
  BASIC_SHADOW_STYLES,
  IS_SMALL_SCREEN,
  MAIN_COLOR,
  PADDING_TOP,
  SCREEN_HEIGHT,
  SCREEN_WIDTH
} from '../../constants/Constants';

interface Props {
  isRTL: boolean,
  strings: any,
  isConnected: boolean,
  showChangeLanguage: boolean,
  goToExposureHistory(): void,
  goToSelfAssessementPage(): void
}

const ScanHomeHeader = ({ isRTL, strings: { scanHome: { noData, hasData, exposureHistory } }, isConnected,
  showChangeLanguage, goToExposureHistory, goToSelfAssessementPage }: Props) => {
  return (
    <ImageBackground
      source={require('../../assets/main/headerBG.png')}
      style={styles.container}
      resizeMode="cover"
      resizeMethod="resize"
    >
      {
        showChangeLanguage && (
          <View style={{ position: 'absolute', left: 20, top: PADDING_TOP(IS_SMALL_SCREEN ? 15 : 20) }}>
            <ChangeLanguageButton />
          </View>
        )
      }

      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Icon source={require('../../assets/onboarding/indiaMinistryOfHealthLogo.png')} width={80} height={60} />
      </View>

      <View style={styles.subContainer}>
        <TouchableOpacity onPress={goToExposureHistory}>
          <View style={[styles.headerItemContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
            <Icon source={require('../../assets/main/history.png')} width={12} height={9} />
            <Text style={styles.text}>{exposureHistory}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToSelfAssessementPage}>
          <View style={[styles.headerItemContainer, { flexDirection: isRTL ? 'row-reverse' : 'row' }]}>
            <Icon source={require('../../assets/main/selfasses.png')} width={25} height={25} />
            <Text style={styles.text}>Self Assessment</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground >
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * (IS_SMALL_SCREEN ? 0.20 : 0.17),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: PADDING_TOP(0)
  },
  subContainer: {
    width: SCREEN_WIDTH,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#fff'
  },
  headerItemContainer: {
    alignItems: 'center'
  },
  indicator: {
    ...BASIC_SHADOW_STYLES,
    width: 10,
    height: 10,
    borderRadius: 5
  },
  text: {
    fontSize: 12,
    paddingHorizontal: 5,
    maxWidth: SCREEN_WIDTH / 2.5
  }
});

export default ScanHomeHeader;
