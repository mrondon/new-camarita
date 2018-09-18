import * as React from 'react';
import { Font } from 'expo';
import MainView from './components/views/MainView.tsx';

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
      <MainView/>
    );
  }
}