import { View, StyleSheet, Text } from "react-native";
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const Cart = ({navigation, route}) => {
    const favlist = useSelector(state => state.CartListReducer.ids);

    const displayedMeals = MEALS.filter(meal => favlist.includes(meal.id));
    console.log(favlist);
    console.log(displayedMeals);

  useEffect(() => {
    navigation.setOptions({
      title: "Cart"
    })
  },[])


  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} />;
};





const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});






export default Cart;