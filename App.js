import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab=createBottomTabNavigator()

const Drawer = createDrawerNavigator();
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./components/Home"
import AppSetting from "./components/AppSetting"


export default function App() {
  return (
    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
        name="Home"
         component={Home}
         options={{
          title:"Dashboard",
          drawerLabel:"Dashboard label",
          drawerActiveTintColor:"#333",
          drawerActiveBackgroundColor:"lightblue",
          drawerContentStyle:{
            backgroundColor:"lightgreen"
          }
         }}
         />
        <Drawer.Screen name="AppSetting" component={AppSetting} />
      </Drawer.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="AppSetting" component={AppSetting} />
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
