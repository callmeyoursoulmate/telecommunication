import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import * as theme from '../../reducers/theme/themeActions';


const TabIcon = ({ title, focused, theme }) => {
  //   const Icon = focused ? SolidIcon : LightIcon;
  const changeTheme = theme.theme;
  let iconName;
  switch (title) {
    case 'Trang chủ':
      iconName = 'home';
      break;
    case 'Cá nhân':
      iconName = 'user';
      break;
    case 'Chú thích':
      iconName = 'book';
      break;
  }

  return (
    <FontAwesome
      name={iconName}
      size={25}
      color={focused ? changeTheme.PRIMARY_BUTTON_COLOR : changeTheme.PRIMARY_TEXT_COLOR}
    />
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(TabIcon);
