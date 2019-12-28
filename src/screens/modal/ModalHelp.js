import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Modal = () => {
  return (
    <View>
      <Text onPress={() => Actions.pop()}>help</Text>
      <Text onPress={() => Actions.pop()}>help</Text>
      <Text onPress={() => Actions.pop()}>help</Text>
      <Text onPress={() => Actions.pop()}>help</Text>
      <Text onPress={() => Actions.pop()}>help</Text>
      <Text onPress={() => Actions.pop()}>help</Text>
	</View>
  )
};

export default Modal;
