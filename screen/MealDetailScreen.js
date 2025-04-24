import React, { useEffect, useCallback, useState } from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import DefaultText from '../components/DefaultText';
import { MEALS } from '../data/dummy-data';
import { AntDesign } from '@expo/vector-icons';
import { addItem, removeItem } from '../redux/slices/fabourite';
import { addToCart, removeFromCart } from "../redux/slices/cartlist";
import {useIsFocused } from '@react-navigation/native';
import Cartcounter from '../components/cartcounter';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = props => {
  const [cartCount, setCartCount] = useState(0);

 // const availableMeals = useSelector(state => state.meals.meals);
 const mealId = props.route.params.mealId;
 const dispatch = useDispatch();
 const useFocused = useIsFocused();
  const currentMealIsFavorite = useSelector(state => state.FabouriteListReducer.ids.indexOf(mealId) + 1);
  const currentMealInCart = useSelector(state => state.CartListReducer.ids.indexOf(mealId) + 1);
  const allMealInCart = useSelector(state => state.CartListReducer.ids.length);

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
     props.navigation.setParams({ mealTitle: selectedMeal.title });
 //   props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  const onfavPress = (val) =>{
    if(val > 0){
      dispatch(removeItem({id: mealId}));
    }else{
      dispatch(addItem({id: mealId}));
    }
  }

  const onCartPress = (val) =>{
    console.log("cart press " + val);
    if(val > 0){
      dispatch(removeFromCart({id: mealId}));
    }else{
      dispatch(addToCart({id: mealId}));
    }
  }

  const navToCart = () => {
    props.navigation.navigate('Cart');
  }

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
      return(
      <View style={styles.headerIcons}>
      <TouchableOpacity onPress={() => onfavPress(currentMealIsFavorite)} >
        <AntDesign name='heart' size={22} color={ currentMealIsFavorite > 0 ? "red" : "grey"} />
      </TouchableOpacity>
        <Cartcounter count={allMealInCart} navigation={props.navigation} />      
      </View>
      )}
    });
  }, [currentMealIsFavorite, currentMealInCart]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <TouchableOpacity style={[styles.addtocart, currentMealInCart ? styles.active : styles.inactive]} onPress={() => onCartPress(currentMealInCart)}>
          <Text style={[styles.carttext, currentMealInCart ? styles.active : styles.inactive ]}>{ currentMealInCart ? "Remove" : "Add To Cart" } </Text>
            <AntDesign name='shoppingcart' size={22} 
              color={ currentMealInCart > 0 ? "red" : "green"}
              containerStyle={{marginHorizontal: 15, position: 'relative',}}
            />
      </TouchableOpacity>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};






const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 60
  },
  addtocart: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: "green",
    borderWidth: 1,
    padding: 8,
    width: 200,
    justifyContent: 'center',
   
  },
  carttext: {
    fontSize: 16,
  },
  active: {
    color: 'red',
    borderColor: "red",
  },
  inactive: {
    borderColor: "green",
    borderColor: "green",
  }

});

export default MealDetailScreen;
