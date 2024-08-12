import { StyleSheet, FlatList, View} from "react-native";
import Element from "./ListElement";
import { useState } from "react";

export default function MainList({route}) {
    const {listOfItems} = route.params;
    console.log(listOfItems)
    return (
        <View>
            <FlatList data={listOfItems} renderItem={({item}) => (
            <Element data={item}/>
          )} /> 
        </View>
    )
}


const styles= StyleSheet.create({
    
})