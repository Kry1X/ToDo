import { useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import Form from './components/FormCreate';
import Settings from './components/Settings';
import Favorites from './components/Favorites';
import MainList from './components/MainList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
/* 
ToDo: Оформелние инетрфейса. Фикс additem
*/
export default function App() {
  
  const [listOfItems, setListOfItems] = useState([
    {text:"TEST", fav: true, key: Math.random().toString(36).substring(7)},
    {text:"TEST2\n1\n2\n3", fav: false, key: Math.random().toString(36).substring(7)} 
  ]);  // {text:"", fav:t|f, key: Math.random().toString(36).substring(7)} 

  const addItem = (data) => {
    setListOfItems((list) => [
      // { text: data.text, fav: data.fav, key: Math.random().toString(36).substring(7) },
      { text: data.text, fav: data.fav, key: Math.random().toString(36).substring(7) },
      ...list,
    ]);
    console.log(list)
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

  const Tab = createBottomTabNavigator();
  return (
      <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Favorites" component={Favorites} initialParams={{listOfItems}} />
            <Tab.Screen name="Home" component={MainList} initialParams={{listOfItems}}/>
            <Tab.Screen name="Create" component={Form} initialParams={{addItem}}/>
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>

      // <View>
      //   < FlatList data={list.filter((el) => (el.fav))} renderItem={({item}) => (<Element data={item}/>)} />
      // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, 
  },
});