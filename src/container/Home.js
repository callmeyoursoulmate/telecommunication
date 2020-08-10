import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { useSelector} from 'react-redux';

const Home = () => {
  const theme = useSelector(state => state.themeReducer.theme);
  return (
    <View style={[styles.container, { backgroundColor: theme.PRIMARY_BACKGROUND_COLOR}]}>
      <TouchableOpacity onPress={() => Actions.LoginScreen()}>
        <Text>Go to Login</Text>
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
