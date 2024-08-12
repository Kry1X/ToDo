import { StyleSheet, View, FlatList, Text} from "react-native"
import Element from "./ListElement"
import { useState } from "react"

export default function Favorites({ route }) {
    const { listOfItems } = route.params;

    return (
        <View>
            <FlatList data={listOfItems.filter((el) => (el.fav))} renderItem={({item}) => (<Element data={item}/>)} />
        </View>
    )
}

const styles= StyleSheet.create({
    
})


{/* <FlatList data={listOfItems} renderItem={({item}) => (
          <Element data={item}/>
        )} /> */}
// () => {()}