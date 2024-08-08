import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Navigation from './components/Header';
import Element from './components/Element';

export default function App() {
  const [listOfItems] = useState([
    {text: "borderRadius\nA\nB\nC", key: "1"},
    {text: "Todo_2", key: "2"},
    {text: "Todo_3", key: "3"},
  ]) 

  return (
    <View>
      <View>
        <FlatList data={listOfItems} renderItem={({item}) => (
          <Element data={item}/>
        )} />
      </View>
      <Header style={{position: 'absolute', paddingBottom: 0}}/>
    </View>
  );
}

const styles = StyleSheet.create({
    
});    
