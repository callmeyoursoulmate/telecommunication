/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AppRouter from './src/AppRouter';

import profileInitState from './src/reducers/profile/profileInitState';
import configureStore from './src/lib/configureStore';
import { Provider } from 'react-redux';

function getInitialState(){
  const _initState = {
    profile: new profileInitState,
  };
  return _initState;
}

const store = configureStore(getInitialState());


const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
