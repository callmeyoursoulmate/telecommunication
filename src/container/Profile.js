import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const Profile = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => Actions.Test()} >
        <Text>Test</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center'
  }
})

export default Profile;
