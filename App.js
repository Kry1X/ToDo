import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Element from './components/ListElement';
import FormCreate from './components/FormCreate';
import Settings from './components/Settings';
import Favorites from './components/Favorites';
import ToggleButton from './components/ToogleBut';
/* 
ToDo: Надо протестировать Header.(Bottom Tabs Navigator, https://reactnavigation.org/docs/bottom-tab-navigator)
      Оформелние инетрфейса
*/
export default function App() {
  const [listOfItems, setListOfItems] = useState([]);  // {text:"", fav:t|f, key: Math.random().toString(36).substring(7)} 

  const addItem = (data) => {
    setListOfItems((list) => [
      // { text: data.text, fav: data.fav, key: Math.random().toString(36).substring(7) },
      { text: data.text, fav: data.fav, key: Math.random().toString(36).substring(7) },
      ...list,
    ]);
    console.log(listOfItems)
  };

  const deleteItem = (key) => {
    setListOfItems((list) => list.filter(item => item.key !== key));
  };

  const changeItem = (key, data) => {
    setListOfItems((list) => {
      const itemIndex = list.findIndex(item => item.key === key);
      if (itemIndex !== -1) {
        const updatedList = [...list];
        updatedList[itemIndex] = { ...updatedList[itemIndex], ...data };
        return updatedList;
      }
      return list;
    });
  };

  return (
    <View>
      {/* <FormCreate addHandler={addItem} /> */}
      {/* <Settings /> */}
      {/* <Favorites list={listOfItems} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
    
});