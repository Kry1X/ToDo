import { useState } from 'react';
import { StyleSheet, TextInput, Text, Pressable, View } from 'react-native';
import { useAppContext } from '../AppContext';

export default function Form({ route }) {
    const [data, setValue] = useState({ text: "", fav: false });
    const { addItem } = useAppContext();

    const onChangeText = (item) => {
        setValue(prevState => ({ ...prevState, text: item }));
    };

    const onChangeFavorite = () => {
        console.log("C_FAV")
        setValue(prevState => ({ ...prevState, fav: !prevState.fav }));
    };

    return (
        <View>
            <Pressable style={styles.but} onPress={onChangeFavorite}>
                <Text style={styles.text}>Favorite</Text>
            </Pressable>
            <TextInput 
                style={styles.input} 
                onChangeText={onChangeText} 
                placeholder='Введите содержимое задачи...' 
            />
            <Pressable onPress={() => addItem(data)} style={styles.but}>
                <Text style={styles.text}>Добавить</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginLeft: 8,
        paddingLeft: 8,
        width: 335,
        height: 129,
        borderRadius: 14,
        backgroundColor: "#D9D9D9",
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: "rgba(0, 0, 0, 1.0)"
    },
    but: {
        padding: 20,
        margin: 10,
        width: '40%',
        height: 75,
        backgroundColor: "#000000",
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 14
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center' 
    }
});
// let m = item.split("; ")
// console.log(m[1])
// setValue({text: m[0], fav: m[1] == "0" ? false : true})