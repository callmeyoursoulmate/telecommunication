// import AsyncStorage from '@react-native-community/async-storage';

// var storageKeys = {
//     THEME: '@TEL:THEME',
// };

// class LocalStorage {
//     //theme
//     setTheme(theme) {
//         // console.log('===> theme',theme);
//         return AsyncStorage.setItem(storageKeys.THEME, JSON.stringify(theme));
//     };
//     getTheme() {
//         return AsyncStorage.getItem(storageKeys.THEME).then(result => {
//             // console.log('===> result',result);
//             return JSON.parse(result);
//         })
//     }
// }


// let localStorage = new LocalStorage();

// export default localStorage;

import React from 'react';
import { AsyncStorage } from 'react-native';
const setItemStorage = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.log('saving data error', e)
    }
};
const getItemStorage = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value != null) {
            return value;
        } else {
            console.log('read data error')
        }
    } catch (e) {
        console.log('read data error', e)
    }
};

export { setItemStorage, getItemStorage };