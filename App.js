import { StyleSheet} from 'react-native';
import Form from './components/FormCreate';
import Settings from './components/Settings';
import Favorites from './components/Favorites';
import MainList from './components/MainList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AppProvider } from './AppContext';
/* 
ToDo: Оформелние инетрфейса. Фикс additem
*/
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <AppProvider>
      <NavigationContainer>
          <Tab.Navigator>
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