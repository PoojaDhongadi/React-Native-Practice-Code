import 'react-native-gesture-handler';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
const DrawerNav = () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={HomeScreen}/>
                <Drawer.Screen name='Notification' component={NotificationScreen}/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
        </View>
    );
}
function NotificationScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Notification Screen</Text>
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
export default DrawerNav;

