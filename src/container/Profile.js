import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { Map } from 'immutable';
// import * as theme from '../reducers/theme/themeActions';
import { useSelector, useDispatch } from 'react-redux';
import { switchTheme } from '../reducers/theme/themeActions';
import { lightTheme, darkTheme } from '../reducers/theme/Theme';
import localStorage from '../lib/localStorage';

const Profile = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const changeToDark = async () => {
    try {
      await localStorage.setTheme(theme);
      dispatch(switchTheme(darkTheme));
    } catch (err) {
      alert(err)
    }
  }
  const changeToLight = async () => {
    try {
      await localStorage.setTheme(theme);
      dispatch(switchTheme(lightTheme));
    } catch (err) {
      alert(err);
    }
  }

  return (
    <View style={[styles.container,
    { backgroundColor: theme.PRIMARY_BACKGROUND_COLOR }
    ]}
    >
      <StatusBar
        barStyle={theme.STATUS_BAR_STYLE}
      />
      <TouchableOpacity onPress={() => Actions.Test()} >
        <Text>Test</Text>
      </TouchableOpacity>
      {theme.mode == 'light' ?
        <TouchableOpacity onPress={changeToDark} style={[styles.changeTheme, { backgroundColor: theme.PRIMARY_BUTTON_COLOR }]}>
          <Text>Change to Dark Theme</Text>
        </TouchableOpacity>
        :
        <TouchableOpacity onPress={changeToLight} style={[styles.changeTheme, { backgroundColor: theme.PRIMARY_BUTTON_COLOR }]}>
          <Text>Change to Light Theme</Text>
        </TouchableOpacity>
      }
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  changeTheme: {
    height: 40,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
})

// const actions = [
//   theme
// ];

// function mapStateToProps(state) {
//   return {
//     ...state
//   };
// }

// function mapDispatchToProps(dispatch) {
//   const creators = Map()
//     .merge(...actions)
//     .filter(value => typeof value === 'function')
//     .toObject();

//   return {
//     actions: bindActionCreators(creators, dispatch),
//     dispatch
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Profile);
export default (Profile);
