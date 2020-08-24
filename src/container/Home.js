import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { useSelector } from 'react-redux';

const Home = () => {
  const theme = useSelector(state => state.theme.theme);

  return (
    <View style={[styles.container,
    { backgroundColor: theme.PRIMARY_BACKGROUND_COLOR }
    ]}>
      <TouchableOpacity onPress={() => Actions.SearchScreen()}>
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
