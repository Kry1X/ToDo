import { StyleSheet, FlatList, View} from "react-native";
import Element from "./ListElement";
import { useAppContext } from "../AppContext";

export default function MainList({route}) {
    const {listOfItems} = useAppContext();
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