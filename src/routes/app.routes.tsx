import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

const Auth = createStackNavigator();

import Dashboard from '../screens/Dashboard'

const App: React.FC = () => {
  return(
    <Auth.Navigator
      headerMode={'none'}
    >
      <Auth.Screen name="Dashboard" component={Dashboard} />
    </Auth.Navigator>
  )
}

export default App;
