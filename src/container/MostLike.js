import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { FlatList } from 'react-native-gesture-handler';

const MostLike = () => {
  return (
    <View style={styles.container}>
      {_renderHeader()}
      <ScrollView style={styles.body}>
        {_renderBody()}
      </ScrollView>
    </View>
  );
};
const _renderHeader = () => {
    return(
        <Text style={{marginTop:40}}>ahihi</Text>
    )
}
const _renderBody = () => {
  let uuid = new Date();
  const dataListRecently = [
    {
      image: require('../assets/images/tv1.png'),
      time: '4p32',
      title: 'Quà giáng sinh của thỏ và chó',
    },
    {
      image: require('../assets/images/tv2.png'),
      time: '3p45',
      title: 'Một ngày làm việc của thỏ và chó',
    },
    {
      image: require('../assets/images/tv3.png'),
      time: '5p67',
      title: 'Một ngày làm việc của ong và bướm'
    },
  ];
  const [dataRecently, setDataRecently] = useState(dataListRecently);
    return(
        <View>
            <Text style={styles.title}>Nghe gần đây</Text>
            <FlatList 
                data={dataRecently}
                contentContainerStyle={{marginHorizontal:16}}
                horizontal
                renderItem={_renderRecently}
                keyExtractor={(item, index) => uuid + '_' + index.toString()}
            />
            <View style={styles.viewLine} />
        </View>
    )
}
const _renderRecently = ({item, index}) => {
  return(
    <View>
      <View>
        <Image source={item.image} style={styles.imageRecently} />
      </View>
      <Text>{item.title}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  body: {
      flex:1,
      backgroundColor:'#fff'
  },
  title: {
      fontSize:18,
      color: 'rgb(52, 52, 52)',
      marginLeft:16,
      marginTop:11
  },
  imageRecently: {
    width:144,
    height:96,
    borderRadius:10
  },
  viewLine: {
    height:1,
    backgroundColor:'rgb(112,112,112)'
  }
})

export default MostLike;
