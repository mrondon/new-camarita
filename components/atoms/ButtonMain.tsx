import * as React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

import constants from '../../assets/styles/config.tsx';

export default class ButtonMain extends React.Component<{}> {
  render() {
    return (
      <TouchableHighlight
        style={ styles.buttonMain }
        onPress={ this.props.callback }
      >
        <Text style={ styles['buttonMain__text'] }>
          { this.props.label.toUpperCase() }
        </Text>
      </TouchableHighlight>
    );
  
}}

const styles = StyleSheet.create({
  buttonMain: {
    backgroundColor: constants.COLOR_ACCENT_2,
    borderRadius: 24,
    height: 48,
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  buttonMain__text: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
