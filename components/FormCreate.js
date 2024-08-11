import { useState } from 'react';
import { StyleSheet, TextInput, Text, Pressable, View } from 'react-native';

export default function Form({addHandler}) {
    const [data, setValue] = useState({text: "", fav: false});

    // let m = item.split("; ")
    // console.log(m[1])
    // setValue({text: m[0], fav: m[1] == "0" ? false : true})
    const onChangeText = (item) => {
        setValue(prevState => ({...prevState, text: item}));
    };
    const onChangeFavorite = () => {
        setValue(prevState => {
            const newFav  = !prevState.fav;
            console.log(newFav); 
            return { ...prevState, fav: newFav};
        });
    };

    return (
        <View>
            <Pressable style={styles.but} onPress={onChangeFavorite}>
                <Text style={{color: 'white'}}>Favorite</Text>
            </Pressable>
            <TextInput style={styles.input} onChangeText={onChangeText} placeholder='Ведите содержимое задачи...'/>
            <Pressable onPress={() => addHandler(data)} style={styles.but}>
                <Text style={{fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Добавить</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
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
        borderColor: 'black',
        padding: 100,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%', 
        backgroundColor: 'black'
    }
});
