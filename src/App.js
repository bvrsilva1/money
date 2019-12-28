import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import MenuScreen from './screens/menu/MenuScreen';
import AddExpenseScreen from './screens/expenses/AddExpenseScreen';
import ModalHelp from './screens/modal/ModalHelp';

const App = () => {
  return (
    <Router>
      <Scene key='modal' modal hideNavBar>
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
        <Scene
          key='modalHelp'
          component={ModalHelp}
          title='Modal'
          modal
          hideNavBar
        />
      </Scene>
    </Router>
  )
};

export default App;
