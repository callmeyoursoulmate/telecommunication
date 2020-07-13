import React from "react";
import { StyleSheet, Platform, View, Text } from "react-native";
import {
  Router,
  Scene,
  Tabs,
} from "react-native-router-flux";
import TabIcon from "./components/icons/TabIcon";

import Home from "./container/Home";
import Profile from "./container/Profile";

const AppRouter = () => {
  return (
    <View style={styles.container}>
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
            activeBackgroundColor="#fff"
            tabs
            hideNavBar
            tabBarStyle={styles.bottomTabBar}
            labelStyle={styles.bottomTabTitle}
            activeTintColor={"red"}
            inactiveTintColor={"#999"}
          >
            <Scene
              key="Home"
              component={Home}
              hideNavBar //tự sinh height on Top
              title="Trang chủ"
              icon={TabIcon}
            />
            <Scene
              key="Profile"
              component={Profile}
              hideNavBar
              title="Cá nhân"
              icon={TabIcon}
            />
          </Tabs>
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
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
  bottomTabBar: {
    height: 65,
    borderTopWidth: Platform.OS === "ios" ? 0 : 0.8,
    borderTopColor: "gray",
    borderTopColor: "gray",
    paddingVertical: 10,
  },
  bottomTabTitle: {
    // fontFamily: "SFUIDisplay-Bold",
    fontSize: 13,
  },
});
export default AppRouter;