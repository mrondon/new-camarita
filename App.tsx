import * as React from 'react';
import { View } from 'react-native';
import { Font } from 'expo';
import { NativeRouter, Route, Link } from 'react-router-native';

import MainView from './components/views/MainView';
import CameraView from './components/views/Camera';

export default class App extends React.Component<{}> {
  
  constructor() {
    this.state = { loadedAssets: false };
  }

  componentDidMount() {
    Font.loadAsync({
      'Muli-Black': require('./assets/fonts/Muli/Muli-Black.ttf'),
      'Muli': require('./assets/fonts/Muli/Muli-Regular.ttf'),
    })
    .then(() => {
      this.setState({ loadedAssets: true });
    })
    .catch((err) => {
      console.log(`Fonts couldn't be imported.\nMore details:\n${err}`);
    });

  }

  render() {
    return this.state.loadedAssets && (
      <NativeRouter>
        <View style={ styles.app }>
          <Route exact path="/" component={ MainView }/>
          <Route path="/camera" component={ CameraView }/>
        </View>
      </NativeRouter>
    );
  }
}

const styles = {
  app: {
    flex: 1,
  },
}
