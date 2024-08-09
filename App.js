import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Element from './components/ListElement';
import FormCreate from './components/FormCreate';
import Settings from './components/Settings';
import Favorites from './components/Favorites';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {text:"awd", fav:false, key: "3"},
    {text:"qwe", fav:false, key: "2"},
  ]) // {text:"", fav:t|f, key: Math.random().toString(36).substring(7)} 

  const addItem = (data) => {
    setListOfItems((list) => {
      return [
        {text: data.text, fav: data.fav, key: data.key},//Math.random().toString(36).substring(7)
        ...list
      ]
    })
  }

  const deleteItem = (key) => {
    setListOfItems((list) => {
      return list.filter(({item}) => (item.key != key))
    });
  }

  const changeItem = (key, data) => {
    setListOfItems((list) => {
      return [
        {text: data.text, fav: data.fav, key: key},
        ...list.filter(({item}) => (item.key != key))
      ]
    })
  }

  return (
    <View>
      <Pressable style={{padding: 100}} onPress={() => 
      {
        addItem(data={text:"TEST", fav:true, key: "1"}); console.log("Add=>", listOfItems)
        changeItem(key="2", data={text:"CHTEST", fav:false}); console.log("Cng=>", listOfItems)
        deleteItem(key="2"); console.log("Del=>", listOfItems)
      }}>
        <Text>Press me!</Text>
      </Pressable>
    </View>
  );
  
}

const styles = StyleSheet.create({
    
});