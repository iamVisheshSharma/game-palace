import React from 'react';
import {useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AuthProvider} from './src/context/AuthContext';
import AppNav from './src/Navigation/AppNav';
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}

export default App;
