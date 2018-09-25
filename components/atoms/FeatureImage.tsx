import * as React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import constants from '../../assets/styles/config.tsx';

export default class FeatureImage extends React.Component<{}> {
  render() {
    return (
      <View style={ styles.featureImage } >
        <Image source={ require('../../assets/img/dog.png') } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  featureImage: {
    borderRadius: 100,
    borderColor: '#ffffff',
    borderWidth: 8,
    overflow: 'hidden',
    elevation: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.8,
    shadowRadius: 8, 
  },
});
