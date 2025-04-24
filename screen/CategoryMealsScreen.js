import React, { useEffect } from 'react';
import { View, StyleSheet,Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';
import Cartcounter from '../components/cartcounter';


const CategoryMealScreen = ({navigation, route}) => {

  const catId = route.params.categoryId;  
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  const allCartItems = useSelector(state => state.CartListReducer.ids.length);

  useEffect(() => {
    navigation.setOptions({
      title: selectedCategory.title,
      headerRight: () => <Cartcounter count={allCartItems} navigation={navigation} />
    })  
  },[])

  // const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds?.indexOf(catId) >= 0
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals}/>;
};





const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
