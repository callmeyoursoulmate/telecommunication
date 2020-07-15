import React, { Component } from "react";
import { StyleSheet, FlatList, Text, Image, View } from "react-native";

const PeopleList = (props) => {
    let uuid = new Date();
    const _renderItem = ({ item }) => {
        const { name, picture, cell, email } = item;
        return (
            <View>
                <View style={styles.cardContainerStyle}>
                    <View style={{ paddingRight: 5 }}>
                        <Text style={styles.cardTextStyle}>
                            {name.first} {name.last} {"\n"}
                            {cell} {"\n"}
                            {email}
                        </Text>
                    </View>
                    <Image
                        style={styles.faceImageStyle}
                        source={{ uri: picture.medium }}
                    />
                </View>
            </View>
        );
    };
    return (
        <FlatList
            style={{ flex: 1 }}
            data={props.people}
            keyExtractor={(index) => uuid + '_' + index.toString()}
            renderItem={_renderItem}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    cardContainerStyle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
        backgroundColor: "rgb(119, 188, 175)",
        padding: 10
    },
    faceImageStyle: {
        width: 65,
        height: 65
    },
    cardTextStyle: {
        color: "white",
        textAlign: "left"
    }
});

export default PeopleList;