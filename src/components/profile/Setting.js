import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import * as theme from '../../reducers/theme/themeActions';

import { lightTheme, darkTheme } from '../../reducers/theme/Theme';
import ls from '../../lib/localStorage';

const Setting = (props) => {
    const theme = props.theme.theme;
    const changeToDark =  () => {
        props.actions.switchTheme(darkTheme);
    }
    const changeToLight =  () => {
        props.actions.switchTheme(lightTheme);
    }

    const logOut = () => {
        ls.removeLogin();
        Actions.SignInScreen();
    }
    return (
        <View style={[styles.container, {backgroundColor: theme.PRIMARY_BACKGROUND_COLOR}]}>
            <TouchableOpacity onPress={() => Actions.pop()} style={[styles.changeTheme]}>
                <Text>BACK</Text>
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
            <TouchableOpacity onPress={logOut} style={[styles.changeTheme]}>
                <Text>LOG OUT</Text>
            </TouchableOpacity>
        </View>
    )
}
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
});

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

export default connect(mapStateToProps, mapDispatchToProps)(Setting);