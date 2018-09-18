import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import constants from '../../assets/styles/config';
import FeatureImage from '../atoms/FeatureImage';
import ButtonMain from '../atoms/ButtonMain';

function openCamera() {
  console.log('inside openCamera');
}

export default class MainView extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <FeatureImage/>
        <Text style={styles.message}>
          Hey there!{'\n'}
          I'm Doug the photogenic dog and I'm here to wish you a happy picture
        </Text> 
        <ButtonMain
          label='T a k e   p i c t u r e'
          callback={ openCamera }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 48,
  },
  message: {
    fontFamily: 'Muli',
    color: constants.COLOR_TEXT,
    textAlign: 'center',
    padding: 48,
    fontSize: 16,
    lineHeight: 24,
  },
});
