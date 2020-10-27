import React, { useEffect, useState } from "react";
import { StyleSheet, Platform, View, Text, StatusBar } from "react-native";
import {
  Router,
  Scene,
  Tabs,
} from "react-native-router-flux";
import TabIcon from "./components/icons/TabIcon";

import Home from "./container/Home";
import Explore from "./container/Explore";
import Profile from "./container/Profile";
import Note from "./container/Note";
import CheckOTP from "./container/CheckOTP";
import SearchScreen from './components/login/SearchScreen';

//profile
import Setting from './components/profile/Setting';
import Test from './components/profile/Test';
import EditProfile from './components/profile/EditProfile';

//note
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import * as profile from './reducers/profile/profileActions';
import * as theme from './reducers/theme/themeActions';

//login
import SignInScreen from './components/login/SignInScreen';
import SignUpScreen from './components/login/SignUpScreen';

import ls from './lib/localStorage';
const AppRouter = (props) => {
  const theme = props.theme.theme;
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    _fetchData()
  }, []);
  const _fetchData = async () => {
    ls.getLoginInfo().then((e) => {
      if (e) {
        setIsLogin(true);
      }
    })
    return;
  }


  return (
    <View style={styles.container}>
      <StatusBar barStyle={theme.STATUS_BAR_STYLE} backgroundColor={theme.PRIMARY_BACKGROUND_COLOR} />
      <Router>
        <Scene
          key="root"
          hideNavBar={true}
          // navigationBarStyle={styles.topNavBar}
          titleStyle={styles.topNavBarTitle}
        >
          <Tabs
            key="Main"
            tabBarPosition="bottom"
            lazy
            tabs
            hideNavBar
            activeBackgroundColor="transperent" //bg khi click vao icon
            tabBarStyle={[styles.bottomTabBar, { backgroundColor: theme.PRIMARY_BACKGROUND_COLOR }]} // bg bottomBar
            labelStyle={styles.bottomTabTitle}
            activeTintColor={theme.PRIMARY_BUTTON_COLOR} //cùng màu với màu icons
            inactiveTintColor={theme.PRIMARY_TEXT_COLOR}

            initial={isLogin}
          >
            <Scene
              key="Home"
              component={Home}
              hideNavBar //tự sinh height on Top
              title="Trang chủ"
              theme //truyền theme vào TabIcon
              icon={TabIcon}
            />
            <Scene
              key="Explore"
              component={Explore}
              // initial
              hideNavBar //tự sinh height on Top
              title="Explore"
              theme //truyền theme vào TabIcon
              icon={TabIcon}
            />
            <Scene
              key="Note"
              // initial
              component={Note}
              hideNavBar
              title="Chú thích"
              icon={TabIcon}
            />
            <Scene
              key="Profile"
              // initial
              component={Profile}
              hideNavBar
              title="Cá nhân"
              icon={TabIcon}
            />
          </Tabs>
          <Scene
            key="SearchScreen"
            component={SearchScreen}
            hideNavBar
            // initial
            title="SearchScreen"
          />
          <Scene
            key="SignInScreen"
            component={SignInScreen}
            hideNavBar
            initial={!isLogin}
            title="SignInScreen"
          />
          <Scene
            key="SignUpScreen"
            component={SignUpScreen}
            hideNavBar
            title="SignUpScreen"
          />
          <Scene
            key="Test"
            component={Test}
            hideNavBar
            title="Test"
          />
          <Scene
            key="Setting"
            component={Setting}
            hideNavBar
            title="Setting"
          />
          <Scene
            key="CheckOTP"
            component={CheckOTP}
            hideNavBar
            title="CheckOTP"
          />
        </Scene>
      </Router>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topNavBar: {
    // backgroundColor: Colors.coral,
    backgroundColor: "red",
    // remove bottom border
    borderBottomWidth: 0,
    elevation: 0,
  },
  topNavBarTitle: {
    // fontFamily: "SFUIDisplay-Semibold",
    color: "#fff",
    fontSize: 21,
    marginBottom: Platform.OS === "ios" ? 14 : 0,
  },
  topTabBar: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  bottomTabBar: {
    height: 65,
    borderTopWidth: Platform.OS === "ios" ? 1 : 0.8,
    borderTopColor: "gray",
    paddingVertical: 10,
  },
  bottomTabTitle: {
    // fontFamily: "SFUIDisplay-Bold",
    fontSize: 13,
  },
});

const actions = [
  profile,
  theme
];

function mapStateToProps(state) {
  return {
    ...state
  };
}
function mapDispatchToProps(dispatch) {
  const creators = Map()
    .merge(...actions)
    .filter(value => typeof value === 'function')
    .toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter)