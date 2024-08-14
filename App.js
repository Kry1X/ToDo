import { StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './AppContext';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import Form from './components/FormCreate';
import Settings from './components/Settings';
import Favorites from './components/Favorites';
import MainList from './components/MainList';
/* 
ToDo: Оформелние инетрфейса (кружок +). Настройки. Удаление и добавлене в избранное
*/
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <AppProvider>
      <NavigationContainer>
          <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              switch (route.name) {
                case 'Favorites':
                  iconName = 'heart'; // MaterialCommunityIcons heart icon
                  break;
                case 'Home':
                  iconName = 'home'; // MaterialCommunityIcons home icon
                  break;
                case 'Create':
                  iconName = 'plus-circle'; // MaterialCommunityIcons plus-circle icon
                  break;
                case 'Settings':
                  iconName = 'cog'; // MaterialCommunityIcons cog icon
                  break;
              }

              return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}>
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Home" component={MainList} />
            <Tab.Screen name="Create" component={Form} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, 
  },
});