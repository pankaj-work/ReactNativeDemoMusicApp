import React from 'react';
import {Main, Details} from '../components';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function ROUTES() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Songs',
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'Songs Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ROUTES;
