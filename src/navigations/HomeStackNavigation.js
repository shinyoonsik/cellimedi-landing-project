import React from 'react';
import Home from '../screens/Home';
import Header from '../screens/Header';
import PostHeader from '../screens/PostHeader';
import HealthData from '../screens/HealthData';
import LinkedHealthData from '../screens/LinkedHealthData';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function HomeStackNavigation() {
    return(
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerTitle: props => <Header {...props} />  }} />
            <Stack.Screen name="HealthData" component={HealthData} options={{ headerTitle: props => <PostHeader {...props} />, headerTitleAlign:'center', headerBackTitleVisible: false}} />
            <Stack.Screen name="LinkedHealthData" component={LinkedHealthData} options={{ headerTitle: props => <PostHeader {...props} />, headerTitleAlign:'center', headerBackTitleVisible: false}} />
        </Stack.Navigator>
    )
}
