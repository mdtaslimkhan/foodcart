import React, { useEffect, useCallback } from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import DefaultText from '../components/DefaultText';
import { MEALS } from '../data/dummy-data';
import { AntDesign } from '@expo/vector-icons';
import { addItem, removeItem } from '../redux/slices/fabourite';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = props => {
 // const availableMeals = useSelector(state => state.meals.meals);
 const mealId = props.route.params.mealId;
 const dispatch = useDispatch();
  const currentMealIsFavorite = useSelector(state => state.FabouriteListReducer.ids.indexOf(mealId) + 1);

  const selectedMeal = MEALS.find(meal => meal.id === mealId);


  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
     props.navigation.setParams({ mealTitle: selectedMeal.title });
 //   props.navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]);

  const onfavPress = (val) =>{
    console.log("hello pressed");
    console.log("hello pressed " + val);

    if(val > 0){
      dispatch(removeItem({id: mealId}));
      console.log("hello removed " + val);
    }else{
      dispatch(addItem({id: mealId}));
      console.log("hello added " + val);
    }
  }

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => <TouchableOpacity onPress={() => onfavPress(currentMealIsFavorite)} >
        <AntDesign name='heart' size={22} color={ currentMealIsFavorite > 0 ? "red" : "grey"} /></TouchableOpacity> 
    });
  }, [currentMealIsFavorite]);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
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
  }
});

export default MealDetailScreen;
