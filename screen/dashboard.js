import { View, Text, StyleSheet, Pressable } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native-gesture-handler";
import CategoryGridTile from "../components/CategoryGridTile";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";



const Dashboard = ({navigation, route}) => {


    useEffect(() => {
      navigation.setOptions({
        title: "All Categories"
      })
    },[])
  
    function handlepress () {
        navigation.navigate('Home');
    }

    const renderGridItem = itemData => {
        return (
          <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
              navigation.navigate('CategoryMealScreen',{
                  categoryId: itemData.item.id
                }
              );
            }}
          />
        );
      };

    return(
      <>
      <StatusBar style="light" />
        <View style={styles.container}>
            <FlatList
            data={CATEGORIES}
            keyExtractor={(item, index) => item.id}
            renderItem={renderGridItem}
            numColumns={2}
            />
        </View>
        </>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});



export default Dashboard;