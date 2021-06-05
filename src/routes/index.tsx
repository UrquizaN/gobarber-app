import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

const Auth = createStackNavigator();

import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'

const Routes: React.FC = () => {
  return(
    <Auth.Navigator
      headerMode={'none'}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  )
}

export default Routes;
