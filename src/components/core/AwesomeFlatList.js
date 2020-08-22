import React from 'react';
import {
    StyleSheet,
    FlatList,
    SafeAreaView,
    RefreshControl,
    ActivityIndicator,
    View,
    Text
} from 'react-native';

const AwesomeFlatList = ({
    getData,
    loading,
    refreshing,
    dataType,
    error,
    keyExtractor,
    onEndReached,
    onEndReachedThreshold,
    ...props
}) => {
    if (error) {
        // return <Error error={error} onRefresh={getData} />;
        return (
            <View>
                <Text>co loi</Text>
            </View>
        );
    }

    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color={'red'} />
            </View>
        );
    }

    return (
        <>
            <FlatList
                refreshControl={
                    getData && (
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={() => getData(true)}
                            color={'red'}
                        />
                    )
                }
                ListEmptyComponent={
                    () => {
                        return (
                            <View style={styles.container}>
                                {/* {onRefresh && <RefreshButton onPress={onRefresh} size={20} />}
                                <Text style={styles.text}>
                                    {children ? children : `Không có ${dataType}`}
                                </Text> */}
                                <Text>ngu</Text>
                            </View>
                        )
                    }
                    // <NoDataText dataType={dataType} onRefresh={getData} />
                }
                {...props}
                contentContainerStyle={{
                    ...styles.flatList,
                    ...props.contentContainerStyle,
                }}
                keyExtractor={keyExtractor}
                onEndReached={onEndReached}
                onEndReachedThreshold={onEndReachedThreshold}
            />
            <SafeAreaView />
        </>
    );
};

const styles = StyleSheet.create({
    flatList: {
        flexGrow: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default AwesomeFlatList;
