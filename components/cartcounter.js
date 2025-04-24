
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';
import { AntDesign } from '@expo/vector-icons';


const CartCounterWithIcon = props => {
  console.log(props.name);
  return(<View style={{ alignItems: 'center',  justifyContent:'center'}}>
            <AntDesign name={props.name} size={24} 
            color={"green"}
            containerStyle={{marginHorizontal: 15, position: 'relative',}}
            />
         {props.count > 0 ? (
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
                      {props.count}
                    </Text>
                  </View>
                ) : null}
                </View>);
}

export const Cartcounternoaction = props => <CartCounterWithIcon name={props.name} count={props.count} />

const Cartcounter = props => {

const navToCart = () => {
  props.navigation.navigate('Cart');
}

return(
  <TouchableOpacity onPress={() => navToCart()} >
    <CartCounterWithIcon count={props.count} />
  </TouchableOpacity>
);

}

export default Cartcounter;