import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import PeopleList from '../employee/PeopleList';
import {Actions} from 'react-native-router-flux';

const Test = () => {
  let [people, setPeople] = useState([]);
  let [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    fetchRandomPeopleAPI()
  }, []);
  fetchRandomPeopleAPI = async () => {
    try {
      let response = await fetch("https://randomuser.me/api?results=15");
      let data = await response.json();
      setPeople(data.results);
      setIsFetching(false);
    } catch (e) {
      alert('====> error', e);
    }
  }
  let content = <PeopleList people={people} />;
  if (isFetching) {
    content = <ActivityIndicator size={"large"} />
  };
  return (
    <View style={styles.container}>
    <TouchableOpacity style={{marginTop:30}} onPress={() => Actions.pop()}>
      <Text>back</Text>
    </TouchableOpacity>
      {content}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})

export default Test;
