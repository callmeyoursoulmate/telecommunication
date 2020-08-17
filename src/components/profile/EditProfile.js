import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import CommonHeader from '../header/CommonHeader';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Map } from 'immutable';
import * as theme from '../../reducers/theme/themeActions';
import { ScrollView } from 'react-native-gesture-handler';
import gui from '../../lib/gui';

const EditProfile = (props) => {
    const [showModal, setShowModal] = useState(false);
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
            <KeyboardAvoidingView
                style={{ flex: 1, marginBottom: 60 }}
                behavior={Platform.OS === 'ios' ? 'padding' : false}
                enabled
            >
                <ScrollView>
                    <TouchableOpacity style={styles.viewChooseImage} onPress={() => setShowModal(true)}>
                        <Image style={styles.viewImage} source={require('../../assets/images/tv1.png')} />
                        <FontAwesome style={styles.camera} size={35} color={'#fff'} name={'camera'} />
                    </TouchableOpacity>
                    <Text style={[styles.titleName, { color: theme.PRIMARY_TEXT_COLOR }]}>Duy Quang</Text>


                    <View style={styles.viewInput}>
                        <FontAwesome name={'user-o'} size={20} color={theme.PRIMARY_TEXT_COLOR} />
                        <TextInput
                            placeholder={"Fisrt Name"}
                            placeholderTextColor={'#666666'}
                            autoCorrect={false}
                            autoCapitalize="none"
                            style={[styles.textInput, { color: theme.PRIMARY_TEXT_COLOR }]}
                        />
                    </View>
                    <View style={styles.viewInput}>
                        <FontAwesome name={'user-o'} size={20} color={theme.PRIMARY_TEXT_COLOR} />
                        <TextInput
                            placeholder={"Last Name"}
                            placeholderTextColor={'#666666'}
                            autoCorrect={false}
                            autoCapitalize="none"
                            style={[styles.textInput, { color: theme.PRIMARY_TEXT_COLOR }]}
                        />
                    </View>
                    <View style={styles.viewInput}>
                        <FontAwesome name={'phone'} size={20} color={theme.PRIMARY_TEXT_COLOR} />
                        <TextInput
                            placeholder={"Phone"}
                            placeholderTextColor={'#666666'}
                            autoCorrect={false}
                            keyboardType={'number-pad'}
                            autoCapitalize="none"
                            style={[styles.textInput, { color: theme.PRIMARY_TEXT_COLOR }]}
                        />
                    </View>
                    <View style={styles.viewInput}>
                        <FontAwesome name={'envelope-o'} size={20} color={theme.PRIMARY_TEXT_COLOR} />
                        <TextInput
                            placeholder={"Email"}
                            placeholderTextColor={'#666666'}
                            autoCorrect={false}
                            keyboardType={'email-address'}
                            autoCapitalize="none"
                            style={[styles.textInput, { color: theme.PRIMARY_TEXT_COLOR }]}
                        />
                    </View>
                    <View style={styles.viewInput}>
                        <FontAwesome name={'globe'} size={20} color={theme.PRIMARY_TEXT_COLOR} />
                        <TextInput
                            placeholder={"Country"}
                            placeholderTextColor={'#666666'}
                            autoCorrect={false}
                            autoCapitalize="none"
                            style={[styles.textInput, { color: theme.PRIMARY_TEXT_COLOR }]}
                        />
                    </View>
                    <View style={styles.viewInput}>
                        <Icon name={'map-marker-outline'} size={20} color={theme.PRIMARY_TEXT_COLOR} />
                        <TextInput
                            placeholder={"City"}
                            placeholderTextColor={'#666666'}
                            autoCorrect={false}
                            autoCapitalize="none"
                            style={[styles.textInput, { color: theme.PRIMARY_TEXT_COLOR }]}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
    const _footer = () => {
        return (
            <View style={styles.footer}>
                <TouchableOpacity style={styles.viewSubmit} onPress={() => alert('hello')}>
                    <Text style={styles.textSubmit}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={[styles.container, { backgroundColor: theme.PRIMARY_BACKGROUND_COLOR }]}>
            {_header()}
            {_body()}
            {_footer()}
            <Modal
                isVisible={showModal}
                backdropColor="rgb(189,187,192)"
                onClosed={() => {
                    // setShowModal(false);
                }}
                onBackdropPress={() => {
                    setShowModal(false);
                }}
            >
                <ScrollView style={styles.viewModal}>
                    <View style={styles.viewBigLine} />
                    <View style={styles.viewBodyModal}>
                        <Text style={{fontSize:18, marginTop:20}}>Upload Photo</Text>
                        <Text style={{fontSize:12, color:'#666', marginBottom:10}}>Choose Your Profile Picture</Text>
                        <TouchableOpacity style={styles.viewButtonModal}>
                            <Text style={[styles.textSubmit, {fontSize:15}]}>Take Photo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.viewButtonModal}>
                            <Text style={[styles.textSubmit, {fontSize:15}]}>Choose From Library</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setShowModal(false)} style={styles.viewButtonModal}>
                            <Text style={[styles.textSubmit, {fontSize:15}]}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Modal>
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
    },
    titleName: {
        marginTop: 10,
        fontSize: 18,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    viewInput: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingBottom: 5,
        borderBottomWidth: 0.5,
        borderColor: '#666',
    },
    textInput: {
        marginLeft: 10
    },
    //footer
    footer: {
        position: 'absolute',
        bottom: gui.marginBottomButton,
        left: 0,
        width: '100%',
        backgroundColor: 'transparent',
    },
    viewSubmit: {
        height: 40,
        marginHorizontal: 20,
        backgroundColor: '#FF6347',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    textSubmit: {
        fontSize: 17,
        color: '#fff',
        fontWeight: 'bold'
    },
    //modal
    viewModal: {
        height: gui.screenHeight / 2.5,
        width: gui.screenWidth + 5,
        backgroundColor: '#fff',
        position: 'absolute',
        borderWidth:2,
        borderColor:'#666',
        left: -20,
        bottom: -20,
        borderTopRightRadius:28,
        borderTopLeftRadius:22,
    },
    viewBigLine: {
        height:8,
        width:40,
        borderRadius:5,
        backgroundColor:'#AAAAAA',
        alignSelf:'center',
        marginTop:10
    },
    viewBodyModal: {
        justifyContent:'center',
        alignItems:'center'
    },
    viewButtonModal: {
        height:40,
        width:gui.screenWidth - 50,
        borderRadius:10,
        marginTop:12,
        backgroundColor:'#FF6347',
        justifyContent:'center',
        alignItems:'center'
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
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
