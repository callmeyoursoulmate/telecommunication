import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{marginTop:30}} onPress={() => Actions.pop()}>
                <Text>Back</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
})
export default SplashScreen;