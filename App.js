import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Element from './components/ListElement';
import FormCreate from './components/FormCreate';
import Settings from './components/Settings';
import Favorites from './components/Favorites';
// ToDo: тест всех окон(+Избранное, +Основной список, +Настройки, +Создание) в app.js
export default function App() {
  const [listOfItems] = useState([
    {text: "borderRadius\nA\nB\nC", key: "1"},
    {text: "Todo_2", key: "2"},
    {text: "Todo_3", key: "3"},
  ]) 

  return (
    <View>

    </View>
  );
}

const styles = StyleSheet.create({
    
});   





{/* <FlatList data={listOfItems} renderItem={({item}) => (
          <Element data={item}/>
        )} /> */}