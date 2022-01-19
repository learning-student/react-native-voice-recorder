/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  ImageBackground,
} from 'react-native';

import {RNVoiceRecorder} from 'react-native-voice-recorder';
let recordingPath;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
  }

  _onRecord() {
    RNVoiceRecorder.Record({
      format: 'wav',
      onDone: path => {
        console.log('record done: ' + path);

        recordingPath = path;
      },
      onCancel: () => {
        console.log('on cancel');
      },
    });
  }

  _onPlay() {
    RNVoiceRecorder.Play({
      path: recordingPath,
      format: 'wav',
      onDone: path => {
        console.log('play done: ' + path);
      },
      onCancel: () => {
        console.log('play cancelled');
      },
    });
  }

  render() {
    return (
      <ImageBackground
        source={require('./assets/background.jpg')}
        style={styles.backgroundImage}>
        <Button
          onPress={() => {
            this._onRecord();

            // this.setState({ visible: true });
          }}
          title={'Record'}
        />
        <Button
          onPress={() => {
            this._onPlay();

            // this.setState({ visible: true });
          }}
          title={'Play'}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});
