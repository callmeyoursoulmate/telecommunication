import AsyncStorage from '@react-native-community/async-storage';

var storageKeys = {
    THEME: '@TEL:THEME',
    LOGIN_INFO: '@TEL:LOGIN_INFO'
};

class LocalStorage {
    //theme
    setTheme(theme) {
        // console.log('===> theme',theme);
        return AsyncStorage.setItem(storageKeys.THEME, JSON.stringify(theme));
    };
    getTheme() {
        return AsyncStorage.getItem(storageKeys.THEME).then(result => {
            // console.log('===> result',result);
            return JSON.parse(result);
        })
    }
    setLoginInfo(loginObj) {
        return AsyncStorage.setItem(storageKeys.LOGIN_INFO, JSON.stringify(loginObj));
    };
    getLoginInfo() {
        return AsyncStorage.getItem(storageKeys.LOGIN_INFO).then(result => {
            console.log('===> rs',result);
            return JSON.parse(result);
        })
    }
    removeLogin() {
        AsyncStorage.removeItem(storageKeys.LOGIN_INFO);
    }
}


let localStorage = new LocalStorage();

export default localStorage;
