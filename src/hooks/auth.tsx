import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import api from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
  created_at: string;
  updated_at: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string
}

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signUp(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(){
        const [token, user] = await AsyncStorage.multiGet([
          '@GoStack:token', '@GoStack:user'
        ]);

        if (token[1] && user[1]) {
          setAuthData({ token: token[1], user: JSON.parse(user[1]) });
        }

        setLoading(false);
    }

    loadStorageData()
  }, [])
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('auth', {
      email,
      password,
    });

    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      ['@GoStack:token', token],
      ['@GoStack:user', JSON.stringify(user)]
    ]);

    setAuthData({ token, user });
  }, []);

  const signUp = useCallback(() => {
    AsyncStorage.multiRemove([
      '@GoStack:token',
      '@GoStack:user'
    ]);

    setAuthData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: authData.user, loading, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };
