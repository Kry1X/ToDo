import { Pressable, StyleSheet } from "react-native"
import { View, Text, Button } from "react-native"


export default function Header() {
    return (
        <View>
            <Pressable style={styles.addButton}>
                <Text style={styles.text}>+</Text>
            </Pressable>
            <View style={styles.block}>
                <Text style={{color: 'white', fontWeight:'bold', textAlign: 'center', marginTop: '70%'}}>Header</Text>
            </View>
        </View>
        
    )
}

const styles= StyleSheet.create({
    block: {
        backgroundColor: 'black',
        height: 70,
        width: "100%"
    },
    addButton: {
        width: 70,
        height: 70,
        backgroundColor: "black",
        borderStyle: 'solid',
        borderRadius: 90,
        borderWidth: 5,
        borderColor: "white",
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    }
})
/* 
const TabNavigator = create({
    screen: {
        scren: Name,
        navigationOptions:
    }
})

*/

