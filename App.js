import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerActions, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './screen/dashboard';
import Home from './screen/home';
import { AntDesign } from '@expo/vector-icons';
import persistStore from 'redux-persist/es/persistStore';
import store from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import CategoryMealScreen from './screen/CategoryMealsScreen';
import MealDetailScreen from './screen/MealDetailScreen';
import Favorite from './screen/favorite';
import Cart from './screen/cart';




// redux persistore configure
let persistor = persistStore(store);

export default function App() {

   



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
          // headerRight: () => {
          // return <View style={styles.navRightIcon}>
          //   <TouchableOpacity style={styles.navitem} onPress={handlePress}>
          //     <AntDesign name='windowso' size={26} />
          //   </TouchableOpacity>
          //   </View>
          // },
        }}>
        <Stack.Screen 
        name='Dashboard'
        component={DrawerNav}
        options={{
          headerLeft: () => {
            return(
              <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer()) }>
                <AntDesign name='windowso' size={26} color="black" /> 
              </TouchableOpacity>
            );
          },
          headerShown: false
        }}
         />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='CategoryMealScreen' component={CategoryMealScreen} />
        <Stack.Screen name='MealDetailScreen' component={MealDetailScreen} />

    </Stack.Navigator>
    );
  }
  
  const DrawerNav = () => {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator screenOptions={{
        headerShown: true }}>
        <Drawer.Screen
          name='DashboardDrawer'
          component={Dashboard}
          options={{
          drawerLabel: "Dashboard",
          drawerIcon: ({color, size}) => (
            <AntDesign name='home' size={size} color={color} />
          )
        }}
         />
         <Drawer.Screen 
          name='Favorite' 
          component={Favorite}
          options={{
            drawerLabel: "Favourite",
            drawerIcon: ({color, size}) => (
              <AntDesign name='heart' size={size} color={color} />
            ),
          }}
          />

          <Drawer.Screen 
          name='Cart' 
          component={Cart}
          options={{
            drawerLabel: "Sopping Cart",
            drawerIcon: ({color, size}) => (
              <AntDesign name='shoppingcart' size={size} color={color} />
            ),
          }}
          />
        
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Provider store={store} >
      <PersistGate persistor={persistor}>
        <Stacknav />
       </PersistGate>
      </Provider>
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

