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
    borderColor: '#eee',
    borderWidth: 8,
    overflow: 'hidden',
  },
});
