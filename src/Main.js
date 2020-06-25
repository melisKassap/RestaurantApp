import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import { Cities, Restaurants, RestaurantDetail } from './pages';

const Stack = createStackNavigator();

function Main() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CitiesPage">
                <Stack.Screen name="CitiesPage" component={Cities} options={{headerShown:false, gestureEnabled:false}}  />
                <Stack.Screen name="RestaurantsPage" component={Restaurants} options={{headerShown:false, gestureEnabled:false}} />
                <Stack.Screen name="Detail" component={RestaurantDetail} options={{headerShown:false, gestureEnabled:false}}/>
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default Main;