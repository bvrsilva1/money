import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import MenuScreen from './screens/menu/MenuScreen';
import AddExpenseScreen from './screens/expenses/AddExpenseScreen';

const App = () => {
  return (
    <Router>
      <Scene key='root'>
        <Scene
          key='menuScene'
          component={MenuScreen}
          title="Menu"
          initial
        />
        <Scene
          key='addExpenseScene'
          component={AddExpenseScreen}
          title="New Expense"
        />
      </Scene>
    </Router>
  )
};

export default App;
