import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';

const Setting = () => {
    return(
        <TouchableOpacity style={styles.container} onPress={() => Actions.pop()}>
            <Text>Setting</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default Setting;