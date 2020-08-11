import AsyncStorage from '@react-native-community/async-storage';

var storageKeys = {
    THEME: '@TEL:THEME',
};

class LocalStorage {
    //theme
    setTheme(theme) {
        console.log('===> theme',theme);
        return AsyncStorage.setItem(storageKeys.THEME, JSON.stringify(theme));
    };
    getTheme() {
        return AsyncStorage.getItem(storageKeys.THEME).then(result => {
            console.log('===> result',result);
            return JSON.parse(result);
        })
    }
}


let localStorage = new LocalStorage();

export default localStorage;