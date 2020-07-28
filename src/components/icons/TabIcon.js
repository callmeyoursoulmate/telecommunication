import React from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default TabIcon = ({ title, focused }) => {
//   const Icon = focused ? SolidIcon : LightIcon;

  let iconName;
  switch (title) {
    case 'Trang chủ':
      iconName = 'home';
      break;
    case 'Cá nhân':
      iconName = 'user';
      break;
    case 'Yêu thích':
      iconName = 'book';
      break;
  }

  return (
    <FontAwesome
      name={iconName}
      size={28}
      color={focused ? 'red' : 'gray'}
    />
  );
};
