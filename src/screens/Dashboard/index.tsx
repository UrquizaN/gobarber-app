import React from 'react';
import { View, Button} from 'react-native';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signUp } = useAuth();

  return(
    <View>
      <Button title="Sair" onPress={signUp} />
    </View>
  );
}

export default Dashboard;
