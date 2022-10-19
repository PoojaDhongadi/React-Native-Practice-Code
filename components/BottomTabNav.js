import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React  from 'react';
import { View ,Text, StyleSheet} from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
        </View>
    );
}
function SearchScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Search Screen</Text>
        </View>
    );
}
function AddScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Add Screen</Text>
        </View>
    );
}
function ActivityScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Activity Screen</Text>
        </View>
    );
}
function ProfileScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Profile Screen</Text>
        </View>
    );
}

const BottomTabNav = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if(route.name === 'Home'){
                        iconName = focused ? 'ios-home' : 'ios-home-outline';
                    }else if(route.name === 'Search'){
                        iconName = focused ? 'search-sharp' : 'search-outline';
                    }else if(route.name === 'Add'){
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    }else if(route.name === 'Activity'){
                        iconName = focused ? 'heart' : 'heart-outline';
                    }else if(route.name === 'Profile'){
                        iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
                    }
                    size = focused? size+8: size+5;
                    return <Ionic name={iconName} color={color} size={size} />
                },
                tabBarActiveTintColor: "black",
                tabBarInactiveTintColor: "black",
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#ffc125',
                    height: 60
                }
            })
            }>
                <Tab.Screen name='Home' component={HomeScreen}/>
                <Tab.Screen name='Search' component={SearchScreen}/>
                <Tab.Screen name='Add' component={AddScreen}/>
                <Tab.Screen name='Activity' component={ActivityScreen}/>
                <Tab.Screen name='Profile' component={ProfileScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
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

export default BottomTabNav;