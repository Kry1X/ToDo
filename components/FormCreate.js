import { useState } from 'react';
import { StyleSheet, TextInput, Text, Pressable, View } from 'react-native';
// import { RadioButton } from 'react-native-paper';

//ToDO: Фикс поправить избранное, добавиь кнопку а не текст
export default function Form({addHandler}) {
    const [data, setValue] = useState({text: "", fav: false});

    // data = "TEXT; 1";
    // let m = data.split("; ")
    // const k = {text: m[0], fav: m[1] === "0" ? false : true}
    // console.log(k);
    const onChange = (item) => {
        let m = item.split("; ")
        console.log(m[1])
        setValue({text: m[0], fav: m[1] == "0" ? false : true})
    };

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder='Ведите содержимое задачи...'/>
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
