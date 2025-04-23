
import { View, StyleSheet, Text } from "react-native";
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const Cartcounter = ({navigation, route, pressbtn}) => {
    return(
        <View style={{flex:1, alignItems: 'center',  justifyContent:'center'}}>
            <AntDesign name='shoppingcart' size={24} 
            color={ currentMealIsFavorite > 0 ? "red" : "grey"}
            containerStyle={{marginHorizontal: 15, position: 'relative',}}
            />
         {cartCount > 0 ? (
                  <View
                    style={{
                      position: 'absolute',
                      backgroundColor: 'red',
                      width: 16,
                      height: 16,
                      borderRadius: 15 / 2,
                      right: -10,
                      top: -10,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: "#FFFFFF",
                        fontSize: 8,
                      }}>
                      {cartCount}
                    </Text>
                  </View>
                ) : null}
                </View>
    );
}