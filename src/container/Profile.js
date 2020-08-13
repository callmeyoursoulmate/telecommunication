import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import * as theme from '../reducers/theme/themeActions';

import CommonHeader from '../components/header/CommonHeader';
import gui from '../lib/gui';

const Profile = (props) => {
  const theme = props.theme.theme;

  const header = () => (
    <CommonHeader
      title={'abc'}
    />
  )
  const body = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{
          marginBottom: 30,
          paddingBottom: 30
        }}
        // showsVerticalScrollIndicator={false}
        // refreshControl={
        //   <RefreshControl refreshing={this.state.isLoading} onRefresh={this.fetchData.bind(this)} />
        // }
      >
        <View style={[styles.viewInfo, { marginBottom: 8 }]}>
          <Image source={require('../assets/images/tv1.png')} style={styles.viewImage} />
          <View>
            <Text style={[styles.titleName, { color: theme.PRIMARY_TEXT_COLOR }]}>Duy Quang</Text>
            <Text style={styles.titleNickname}>duyquangg</Text>
          </View>
        </View>

        {_renderRow('map-marker-radius', 'Hanoi, Vietnam')}
        {_renderRow('phone', '0988664670')}
        {_renderRow('email', 'duyquangg@gmail.com')}
        <View style={styles.viewCenterBody}>
          <View style={styles.viewHalfCenter}>
            <Text style={[styles.titleCenter, { color: theme.PRIMARY_TEXT_COLOR }]}>$140</Text>
            <Text style={styles.textSmallCenter}>Wallet</Text>
          </View>
          <View style={[styles.viewHalfCenter, { borderRightColor: 'transparent' }]}>
            <Text style={[styles.titleCenter, { color: theme.PRIMARY_TEXT_COLOR }]}>12</Text>
            <Text style={styles.textSmallCenter}>Orders</Text>
          </View>
        </View>
        {_renderRow('heart-outline', 'Your favorites', () => Actions.Test())}
        {_renderRow('credit-card', 'Payment', () => alert('hihi'))}
        {_renderRow('share-outline', 'Tell Your Friends', () => alert('hihi'))}
        {_renderRow('account-check-outline', 'Support', () => alert('hihi'))}
        {_renderRow('settings-outline', 'Setting', () => Actions.Setting())}
      </ScrollView>
    )
  }
  const _renderRow = (icon, title, onPress) => {
    return (
      <View>
        {onPress ?
          <View>
            <TouchableOpacity activeOpacity={1} onPress={onPress} style={[styles.viewInfo, { marginTop: 20 }]}>
              <Icon name={icon} size={25} color={'#FF6347'} />
              <Text style={styles.textInfoPress}>{title}</Text>
            </TouchableOpacity>
            {/* {title != 'Setting' ? */}
            <View style={styles.viewLine} />
          </View>
          :
          <View style={[styles.viewInfo, { marginTop: 8 }]}>
            <Icon name={icon} size={20} color={'#777'} />
            <Text style={styles.textInfo}>{title}</Text>
          </View>
        }
      </View>
    )
  }
  return (
    <View style={[styles.container, { backgroundColor: theme.PRIMARY_BACKGROUND_COLOR }]}>
      <StatusBar barStyle={theme.STATUS_BAR_STYLE} />
      {header()}
      {body()}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  //body
  viewInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  viewImage: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginRight: 20
  },
  titleName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  titleNickname: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5
  },
  textInfo: {
    fontSize: 12,
    color: '#777',
    marginLeft: 20,
    fontWeight: '500'
  },
  textSmallCenter: {
    fontSize: 12,
    color: '#777',
    marginTop: 3,
    fontWeight: '500'
  },
  textInfoPress: {
    fontSize: 16,
    color: '#777',
    marginLeft: 20,
    fontWeight: 'bold'
  },
  viewLine: {
    height: 1,
    marginTop: 3,
    backgroundColor: '#7899'
  },
  viewCenterBody: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  viewHalfCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    height: 100,
    borderColor: '#7899',
    borderLeftColor: 'transparent',
    width: gui.screenWidth / 2
  },
  titleCenter: {
    fontSize: 20
  },
})

const actions = [
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);