import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Element from './components/ListElement';
import FormCreate from './components/FormCreate';
import Settings from './components/Settings';
import Favorites from './components/Favorites';
import MainList from './components/MainList';
/* 
ToDo: Надо протестировать Header.(Bottom Tabs Navigator, https://reactnavigation.org/docs/bottom-tab-navigator)
      Оформелние инетрфейса
*/
export default function App() {
  
  return (
    <View style={styles.container}>
      <Header/>
      {/* <MainList list={listOfItems} />
      <FormCreate addHandler={addItem} /> */}
      {/* <Settings /> */}
      {/* <Favorites list={listOfItems} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, 
  },
});