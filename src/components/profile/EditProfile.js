import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
    TouchableOpacity,
    Image
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CommonHeader from '../header/CommonHeader';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import * as theme from '../../reducers/theme/themeActions';
import { ScrollView } from 'react-native-gesture-handler';
import gui from '../../lib/gui';

const EditProfile = (props) => {
    const theme = props.theme.theme;
    const _header = () => (
        <CommonHeader
            title={'Edit Profile'}
            textStyle={{ color: theme.PRIMARY_TEXT_COLOR }}
            leftContent={<FontAwesome name={'chevron-left'} size={20} color={theme.PRIMARY_TEXT_COLOR} />}
            onPressLeft={() => Actions.pop()}
            noLinear
        />
    )
    const _body = () => {
        return (
            <ScrollView style={{ flex: 1 }}>
                <TouchableOpacity style={styles.viewChooseImage}>
                    <Image style={styles.viewImage} source={require('../../assets/images/tv1.png')} />
                    <FontAwesome style={styles.camera} size={35} color={'#fff'} name={'camera'} />
                </TouchableOpacity>
            </ScrollView>
        )
    }
    return (
        <View style={[styles.container, { backgroundColor: theme.PRIMARY_BACKGROUND_COLOR }]}>
            {_header()}
            {_body()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    viewChooseImage: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor:'red',
        // height: 100,
        // width: 100,
    },
    viewImage: {
        height: 100,
        width: 100,
        borderRadius: 15
    },
    camera: {
        position: 'absolute',
        left: gui.screenWidth / 2 - 20,
        top: 30,
        opacity: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10
    }
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
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
