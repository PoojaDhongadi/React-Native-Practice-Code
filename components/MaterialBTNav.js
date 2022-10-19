import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';


const Tab = createMaterialBottomTabNavigator();

const MaterialBTNav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            activeColor="#f0edf6"
            inactiveColor="#3e2465"
            barStyle={{ backgroundColor: 'tomato' }}>
                <Tab.Screen 
                name='Home' 
                component={HomeScreen} 
                options={{
                    tabBarLabel:'Home',
                    tabBarIcon: ({color}) => (
                        <Icons name='home-circle' color={color} size={26}/>
                    )
                }}/>
                <Tab.Screen name='Search' component={SearchScreen} />
                <Tab.Screen name='Add' component={AddScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
        </View>
    );
}
function SearchScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Search Screen</Text>
        </View>
    );
}
function AddScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Add Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#54CBff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 38,
        fontWeight: 'bold',
        letterSpacing: 4
    }
});

export default MaterialBTNav;