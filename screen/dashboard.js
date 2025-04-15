import { View, Text, StyleSheet, Pressable } from "react-native";


const Dashboard = ({navigation, route}) => {

    function handlepress () {
        navigation.navigate('Home');
    }

    return(
        <View style={styles.container}>
            <Text>Dashboard</Text>
            <Pressable onPress={handlepress}>
                <Text>Go to Home</Text>
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



export default Dashboard;