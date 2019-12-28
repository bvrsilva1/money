import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const MenuScreen = () => {
  return (
    <View>
      <Text onPress={() => Actions.addExpenseScene()}>menu</Text>
		</View>
  )
};

export default MenuScreen;
