import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Auth = createStackNavigator();


const AuthRoutes: React.FC = () => {
  return(
    <Auth.Navigator
      headerMode={'none'}
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  )
}

export default AuthRoutes;
