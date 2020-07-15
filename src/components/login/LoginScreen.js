import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    SafeAreaView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const LoginScreen = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getData()
    }, [])

    getData = async () => {
        setLoading(true);
        const apiURL = `http://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`;

        fetch(apiURL)
            .then(res => res.json())
            .then(resJson => {
                setData(data.concat(resJson));
                setLoading(false);
            });
    };

    renderRow = ({ index, item }) => {
        return (
            <View style={styles.itemRow}>
                <Text style={styles.itemText}>{`${index}) ` + item.title}</Text>
            </View>
        );
    };

    renderFooter = () => {
        // ActivityIndicator Displays a circular loading indicator.
        return loading ? (
            <View style={styles.loader}>
                <ActivityIndicator size="large" />
            </View>
        ) : null;
    };

    handleLoadMore = () => {
        setPage(page + 1);
        setLoading(true);
        getData();
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => Actions.pop()}>
                <Text>Back</Text>
            </TouchableOpacity>
            <FlatList
                style={styles.container}
                data={data}
                renderItem={renderRow}
                keyExtractor={(item, index) => index.toString()}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.1}
                // onEndReachedThreshold={0}
                ListFooterComponent={renderFooter}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#f5fcff',
    },
    itemRow: {
        borderBottomColor: '#ccc',
        marginBottom: 10,
        borderBottomWidth: 1,
    },
    itemText: {
        fontSize: 16,
        padding: 5,
    },
    loader: {
        marginTop: 10,
        alignItems: 'center',
    },
});
export default LoginScreen;