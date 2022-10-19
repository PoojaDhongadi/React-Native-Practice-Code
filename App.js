
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ScreenStackHeaderRightView } from 'react-native-screens';


const App = () => {

  const Stack = createNativeStackNavigator();

  const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <Button
          title='Goto Pooja Profile'
          onPress={() => {
            navigation.navigate('Profile', { name: 'Pooja' })
          }}
        />
      </View>
    );
  }
  const ProfileScreen = ({ navigation, route }) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is {route.params.name}'s profile</Text>
        <Button
          title='Go back to Home Page'
          onPress={() => {
            navigation.goBack();
          }} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e'
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 25
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ 
            title: 'Welcome' ,
            headerRight: () => (
              <Button 
              title='Info'
              color='#000'
              onPress={() => alert("This is button in header")}/>
            ),
            }} />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        // options={{
        //   headerStyle: {
        //     backgroundColor: '#f4511e'
        //   },
        //   headerTintColor: '#fff',
        //   headerTitleStyle: {
        //     fontWeight: 'bold',
        //     fontSize: 25
        //   }
        // }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    fontSize: 25,
    margin: 10
  },
  btn: {
    color: '#fff'
  }

});

export default App;
