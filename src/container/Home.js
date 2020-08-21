import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { useSelector } from 'react-redux';
import {setItemStorage, getItemStorage} from '../lib/localStorage';

const Home = () => {
  const theme = useSelector(state => state.theme.theme);

  saveItem = () => {
    setItemStorage('A', {theme});
  }
  readItem = () => {
    getItemStorage('A').then(rs => {
      alert('value ' + rs);
    })
  }

  return (
    <View style={[styles.container,
    { backgroundColor: theme.PRIMARY_BACKGROUND_COLOR }
    ]}>
      <TouchableOpacity onPress={() => Actions.LoginScreen()}>
        <Text>Test</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Home;
