import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './screen/dashboard';
import Home from './screen/home';
import { AntDesign } from '@expo/vector-icons';

export default function App() {

   
  const Drawer = createDrawerNavigator();


  const Stacknav = () => {
    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();
    const handlePress = () => {
      console.log("asdfhgo");
    }

    const handlePressecond = () => {
      console.log("second item");
    }

    return (
    <Stack.Navigator 
        screenOptions={{
          headerTitleAlign: 'center',
          headerRight: () => {
          return <View style={styles.navRightIcon}>
            <TouchableOpacity style={styles.navitem} onPress={handlePress}>
              <AntDesign name='windowso' size={26} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.navitem} onPress={handlePressecond}>
              <AntDesign name='printer' size={26} />
            </TouchableOpacity>
            </View>
          },
        }}>
        <Stack.Screen name='Dashboard'
        component={Dashboard}
        options={{
          headerLeft: () => {
            return(
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer()) }>
                <AntDesign name='windowso' size={26} color="black" /> 
              </TouchableOpacity>
            );
          }
        }}
         />
        <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
    );
  }


  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerShown: false }}>
        <Drawer.Screen name='Dashboard'
         component={Stacknav}
          />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  navRightIcon: {
    flexDirection: 'row',
    
  },
  navitem: {
    marginLeft: 16
  }
});

