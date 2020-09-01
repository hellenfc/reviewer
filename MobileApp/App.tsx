
import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';

import Pusher from 'pusher-js/react-native';

import Header from './components/Header';
import ListItem from './components/ListItem';

console.log('AQUI TOY')


const App = (): React.ReactElement => {
  const [items, setItems] = useState([])

  // Pusher.logToConsole = true;

  let pusher = new Pusher('7b5f873955d15a8a72b4', {
    cluster: 'mt1'
  });

  let channel = pusher.subscribe('review-channel');
  channel.bind('new-review', function (data: any) {
    setItems(data.data)
    // console.log('DATA', data.data)
  });

  return (
    <View style={styles.container}>
      <Header />
      <FlatList data={items} renderItem={({ item }) => (
        <ListItem item={item} />
      )} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60
  }
})

export default App;
