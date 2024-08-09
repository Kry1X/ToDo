import { StyleSheet, View, FlatList } from "react-native-web"
import Element from "./ListElement"
import { useState } from "react"

export default function Favorites({list}) {

    return (
        <View>
            <FlatList data={list.filter((el) => (el.fav))} renderItem={({item}) => <Element data={item} />} />
        </View>
    )
}

const styles= StyleSheet.create({
    
})


{/* <FlatList data={listOfItems} renderItem={({item}) => (
          <Element data={item}/>
        )} /> */}
// () => {()}