import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Actions } from 'react-native-router-flux';
import { useSelector } from 'react-redux';

const Explore = () => {
    const theme = useSelector(state => state.theme.theme);
    return (
        <View style={[styles.container,
        { backgroundColor: theme.PRIMARY_BACKGROUND_COLOR }
        ]}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
        </View>
    );
};
const styles = StyleSheet.create({
    // container: {
    //     flex: 1
    // },
    map: {
        height: '100%'
    },
})

export default Explore;
