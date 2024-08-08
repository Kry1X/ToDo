import { StyleSheet, TouchableOpacity, Text } from "react-native"

export default function Element({data}) {
    return (
        <View>
            <Pressable style={styles.addButton}>
                <Text style={styles.text}>+</Text>
            </Pressable>
        </View>
    )
}

const styles= StyleSheet.create({
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