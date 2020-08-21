// import React, { useState, useEffect, useCallback } from 'react';
// import {
//     StyleSheet,
//     FlatList,
//     View,
//     Text,
//     TouchableOpacity,
//     ActivityIndicator,
//     SafeAreaView,
//     TextInput
// } from 'react-native';
// import { Actions } from 'react-native-router-flux';
// import _ from 'lodash';
// // import {debounce} from 'lodash';

// const LoginScreen = () => {
//     const [data, setData] = useState([]);
//     const [page, setPage] = useState(1);
//     const [loading, setLoading] = useState(false);
//     // const [filterData, setFilterData] = useState([]);


//     const [search, setSearch] = useState('');


//     useEffect(() => {
//         getData();
//     }, [])
//     const getData = () => {
//         setLoading(true);
//         const apiURL = `http://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`;

//         fetch(apiURL).then(res => res.json())
//             .then(resJson => {
//                 setData(data.concat(resJson));
//                 setLoading(false);
//             });
//     };

//     const renderRow = ({ index, item }) => {
//         return (
//             <View style={styles.itemRow}>
//                 <Text style={styles.itemText}>{`${index}) ` + item.title}</Text>
//             </View>
//         );
//     };

//     const renderFooter = () => {
//         // ActivityIndicator Displays a circular loading indicator.
//         return loading ? (
//             <View style={styles.loader}>
//                 <ActivityIndicator size="large" />
//             </View>
//         ) : null;
//     };

//     const handleLoadMore = () => {
//         setPage(page + 1);
//         setLoading(true);
//         getData();
//     };

//     const searchTelecommunication = (text) => {
//         setSearch(text);
//         newSearchFunc(text);
//     };
//     // const newSearchFunc = _.debounce((text) => {
//     //     const textFormat = text.toLowerCase();
//     //     const newData = data.filter(e => {
//     //         if (e.title.includes(textFormat)) {
//     //             return true;
//     //         }
//     //         return false;
//     //     })
//     //     setData(newData);
//     // }, 200);

//     const newSearchFunc = React.useMemo((text) => {
//         console.log('====> search',text);
//     }, [])

//     return (
//         <SafeAreaView style={{ flex: 1 }}>
//             <TouchableOpacity onPress={() => Actions.pop()}>
//                 <Text>Back</Text>
//             </TouchableOpacity>
//             <TextInput
//                 placeholder={'Search Telecommunication'}
//                 placeholderTextColor={'#666'}
//                 onChangeText={searchTelecommunication}
//                 style={styles.viewSearch}
//                 underlineColorAndroid={"transparent"}
//                 value={search}
//             />
//             <FlatList
//                 style={styles.container}
//                 data={data}
//                 renderItem={renderRow}
//                 keyExtractor={(item, index) => index.toString()}
//                 onEndReached={handleLoadMore}
//                 onEndReachedThreshold={0.1}
//                 // onEndReachedThreshold={0}
//                 ListFooterComponent={renderFooter}
//             />
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 20,
//         backgroundColor: '#f5fcff',
//     },
//     itemRow: {
//         borderBottomColor: '#ccc',
//         marginBottom: 10,
//         borderBottomWidth: 1,
//     },
//     itemText: {
//         fontSize: 16,
//         padding: 5,
//     },
//     loader: {
//         marginTop: 10,
//         alignItems: 'center',
//     },
//     viewSearch: {
//         height: 40,
//         marginTop: 5,
//         marginHorizontal: 16,
//         borderRadius: 15,
//         paddingLeft: 20,
//         backgroundColor: 'rgb(200,200,200)',
//     }
// });
// export default LoginScreen;


import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Text,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

function ABCDEE() {
  const [text, setText] = useState('');
  const [state, setState] = useState({ data: [], loading: false }); // only one data source
  const { data, loading } = state;
  const fetchAPI = () => {
    setState({data:[], loading: true});
    return fetch('https://api.covid19api.com/countries')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setState({ data, loading: false }); // set only data
      })
      .catch(error => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchAPI();
  }, []); // use `[]` to avoid multiple side effect

  const filterdData = text // based on text, filter data and use filtered data
    ? data.filter(item => {
        const itemData = item.Country.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      })
    : data; // on on text, u can return all data
  console.log(data);
  const itemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#000',
        }}
      />
    );
  };

  return (
    <View>
      {loading === false ? (
        <View style={styles.MainContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={text => setText(text)}
            value={text}
            underlineColorAndroid="transparent"
            placeholder="Search Here"
          />
          <FlatList
            data={filterdData}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={itemSeparator}
            renderItem={({ item }) => (
              <Text style={styles.row}>{item.Country}</Text>
            )}
            style={{ marginTop: 10 }}
          />
        </View>
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    paddingTop: 50,
    justifyContent: 'center',
    flex: 1,
    margin: 5,
    minHeight: 800,
  },

  row: {
    fontSize: 18,
    padding: 12,
  },

  textInput: {
    textAlign: 'center',
    height: 42,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 8,
    backgroundColor: '#333',
  },
});
export default ABCDEE;