import { StyleSheet, TouchableOpacity, Text } from "react-native"

export default function Element({data}) {
    return (
        <TouchableOpacity style={styles.eleme}>
            <Text>{data.text}</Text>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    eleme: {
        borderRadius: 14,
        backgroundColor: "#D9D9D9",
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: "black",
        textAlign: 'center', 
        padding: 20,
        marginTop: 16,
        marginHorizontal: 10
    }
})