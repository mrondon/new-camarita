import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Link } from 'react-router-native';

import constants from '../../assets/styles/config.tsx';

export default class ButtonMain extends React.Component<{}> {
  render() {
    return (
      <Link 
        to={ this.props.to }
        style={ styles.buttonMain }
      >
        <Text style={ styles['buttonMain__text'] }>
          { this.props.label.toUpperCase() }
        </Text>
      </Link>
    );
  
}}

const styles = StyleSheet.create({
  buttonMain: {
    backgroundColor: constants.COLOR_ACCENT_2,
    borderRadius: 24,
    height: 48,
    paddingVertical: 14,
    paddingHorizontal: 32,
  },
  buttonMain__text: {
    color: '#ffffff',
    fontFamily: 'Muli-Black',
    letterSpacing: 4,
  },
});
