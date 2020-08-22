import React, { useState, useEffect, useCallback } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
  TextInput,
  RefreshControl
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

const SearchScreen = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState('');

  const [timeoutRef, setTimeoutRef] = useState(null);

  useEffect(() => {
    getData();
  }, [])
  const getData = () => {
    setLoading(true);
    const apiURL = `http://jsonplaceholder.typicode.com/todos?_limit=10&_page=${page}`;

    fetch(apiURL).then(res => res.json())
      .then(resJson => {
        setData(data.concat(resJson));
        setLoading(false);
      });
  };

  const renderRow = ({ index, item }) => {
    return (
      <View style={styles.itemRow}>
        <Text style={styles.itemText}>{`${index}) ` + item.title}</Text>
      </View>
    );
  };

  const renderFooter = () => {
    // ActivityIndicator Displays a circular loading indicator.
    return loading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    setLoading(true);
    getData();
  };

  const filterData = search ? data.filter((e) => {
    const itemData = e.title.toUpperCase();
    const textData = search.toUpperCase();
    return itemData.indexOf(textData) > -1;
  }) : data;

  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const onRefresh = React.useCallback(() => {
    setLoading(true);
    // getData(); //call lại useEffect
    wait(1000).then(() => setLoading(false));
  }, []);
  
  function _renderEmty(){
    return(
      <Text>k co du lieu</Text>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => Actions.pop()}>
        <Text>Back</Text>
      </TouchableOpacity>
      <TextInput
        placeholder={'Search Telecommunication'}
        placeholderTextColor={'#666'}
        onChangeText={(text) => setSearch(text)}
        style={styles.viewSearch}
        underlineColorAndroid={"transparent"}
        value={search}
      />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
        data={filterData}
        renderItem={renderRow}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={_.debounce(handleLoadMore, 200)} //search k bi giat
        // onEndReached={handleLoadMore} //search bi giat
        // onEndReachedThreshold={0.1} //0.1 vẫn bị giật, phải để 0
        onEndReachedThreshold={0}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={_renderEmty}


        // scrollEnabled={true}
        contentContainerStyle={{ paddingBottom: 60 }}
        // enableEmptySections
        // maxToRenderPerBatch={10}
        // updateCellsBatchingPeriod={10}
        // windowSize={21}
        // initialListSize={10}
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
  viewSearch: {
    height: 40,
    marginTop: 5,
    marginHorizontal: 16,
    borderRadius: 15,
    paddingLeft: 20,
    backgroundColor: 'rgb(200,200,200)',
  }
});
export default SearchScreen;


// import React, { useState, useEffect } from 'react';
// import {
//   ActivityIndicator,
//   Alert,
//   FlatList,
//   Text,
//   StyleSheet,
//   View,
//   TextInput,
// } from 'react-native';

// function SearchScreen() {
//   const [text, setText] = useState('');
//   const [state, setState] = useState({ data: [], loading: false }); // only one data source
//   const { data, loading } = state;
//   const fetchAPI = () => {
//     setState({ data: [], loading: true });
//     return fetch('https://api.covid19api.com/countries')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setState({ data, loading: false }); // set only data
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   };
//   useEffect(() => {
//     fetchAPI();
//   }, []); // use `[]` to avoid multiple side effect

//   const filterdData = text // based on text, filter data and use filtered data
//     ? data.filter(item => {
//       const itemData = item.Country.toUpperCase();
//       const textData = text.toUpperCase();

//       return itemData.indexOf(textData) > -1;
//     })
//     : data; // on on text, u can return all data
//   const itemSeparator = () => {
//     return (
//       <View
//         style={{
//           height: 0.5,
//           width: '100%',
//           backgroundColor: '#000',
//         }}
//       />
//     );
//   };

//   return (
//     <View>
//       <View style={styles.MainContainer}>
//         <TextInput
//           style={styles.textInput}
//           onChangeText={text => setText(text)}
//           value={text}
//           underlineColorAndroid="transparent"
//           placeholderTextColor={'#fff'}
//           placeholder="Search Here"
//         />
//         <FlatList
//           data={filterdData}
//           keyExtractor={(item, index) => index.toString()}
//           ItemSeparatorComponent={itemSeparator} //ngay duoi moi item
//           renderItem={({ item }) => (
//             <View>
//               <Text style={styles.row}>{item.Country}</Text>
//             </View>

//           )}
//           style={{ marginTop: 10 }}
//         />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   MainContainer: {
//     paddingTop: 50,
//     justifyContent: 'center',
//     flex: 1,
//     margin: 5,
//     minHeight: 800,
//   },
//   row: {
//     fontSize: 18,
//     padding: 12,
//   },
//   textInput: {
//     textAlign: 'center',
//     height: 42,
//     borderWidth: 1,
//     borderColor: '#009688',
//     borderRadius: 8,
//     backgroundColor: '#333',
//     color: '#fff'
//   },
// });
// export default SearchScreen;