import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const AddExpenseScreen = () => {
  return (
    <View>
      <Text onPress={() => Actions.pop()}>add expense menu</Text>
		</View>
  )
};

export default AddExpenseScreen;
