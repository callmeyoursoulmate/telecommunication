/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect, useState } from 'react';
import AppRouter from './src/AppRouter';

import profileInitState from './src/reducers/profile/profileInitState';
import themeInitState from './src/reducers/theme/themeInitState';
import configureStore from './src/lib/configureStore';
import { Provider } from 'react-redux';

import localStorage from './src/lib/localStorage';

function getInitialState() {
  const _initState = {
    profile: new profileInitState,
    theme: new themeInitState
  };
  return _initState;
}
const store = configureStore(getInitialState());


const App = () => {
  // const themeCurrent = store.getState().theme.theme;
  // const [theme, setTheme] = useState({themeCurrent});
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   let localTheme = await localStorage.getTheme(theme);
  //   if(localTheme){
  //     setTheme(localTheme);
  //   }
  // }
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
