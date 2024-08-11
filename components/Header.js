import { Pressable, StyleSheet } from "react-native"
import { View, Text, Button } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';
import Favorites from "./Favorites";
import MainList from "./MainList";
import Settings from "./Settings";
import Form from "./FormCreate";

const Tab = createBottomTabNavigator();

export default function Header() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
            {/* <Tab.Screen name="Favorites" component={Favorites} /> */}
            <Tab.Screen name="Home" component={MainList}/>
            <Tab.Screen name="Create" component={Form} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
        </NavigationContainer>
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

