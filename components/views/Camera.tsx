import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import constants from '../../assets/styles/config';

export default class Camera extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          The camera
        </Text> 
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
    paddingTop: 12,
  },
  message: {
    fontFamily: 'Muli',
    color: constants.COLOR_TEXT,
    textAlign: 'center',
    paddingHorizontal: 48,
    paddingTop: 24,
    paddingBottom: 48,
    fontSize: 16,
    lineHeight: 24,
  },
});
