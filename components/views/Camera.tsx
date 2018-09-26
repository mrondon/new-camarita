import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { Camera, Permissions } from 'expo';

import constants from '../../assets/styles/config';

export default class CameraView extends React.Component<{}> {

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  render() {
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <View/>;
    }
    else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }

    else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={ styles.container } type={this.state.type}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  type: this.state.type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back,
                });
              }}>
              <Image
                style={ styles.trigger }
                source={ require('../../assets/img/icon_cam_trigger.png') }
              />
            </TouchableOpacity>
          </Camera>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 48,
  },
  trigger: {
    width: 64,
    height: 64,
  },
});
