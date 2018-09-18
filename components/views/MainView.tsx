import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import ButtonMain from '../atoms/ButtonMain.tsx';

function openCamera() {
  console.log('inside openCamera');
}

export default class MainView extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          yass!
        </Text> 
        <ButtonMain
          label='Take picture'
          callback={ openCamera }
        />
      </View>
    );
  
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
