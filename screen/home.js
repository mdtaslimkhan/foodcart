import { StackActions } from "@react-navigation/native";
import { View, Text, StyleSheet, Pressable } from "react-native";

const Home = ({navigation, route}) => {

    function handlepress(){
         navigation.navigate('Dashboard');
      // navigation.dispatch(StackActions.popToTop());
    }

    return(
        <View style={styles.container} >
            <Text>Home</Text>
            <Pressable onPress={handlepress}>
                <Text>Go to Dashboard</Text>
            </Pressable>
        </View>
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
  


export default Home;