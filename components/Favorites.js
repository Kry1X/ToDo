import { StyleSheet, View, FlatList, Text} from "react-native"
import Element from "./ListElement";
import { useAppContext } from "../AppContext";

export default function Favorites({ route }) {
    const { listOfItems } = useAppContext();

    return (
        <View>
            <FlatList data={listOfItems.filter((el) => (el.fav))} renderItem={({item}) => (<Element data={item}/>)} />
        </View>
    )
}

const styles= StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: 'black',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'
      },
      but: {
        borderBottomWidth: 1,
        borderColor: '#D9D9D9',
        marginVertical: 30,
        marginHorizontal: '20%',
        width: 90, 
        height: 30,
        backgroundColor: 'black',
        borderRadius: 5
      }
})


{/* <FlatList data={listOfItems} renderItem={({item}) => (
          <Element data={item}/>
        )} /> */}
// () => {()}