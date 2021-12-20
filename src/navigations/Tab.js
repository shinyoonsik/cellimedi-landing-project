import React from 'react';
import MenuDrawerMyDoctor from './MenuDrawer-MyDoctor';
import MenuDrawerHome from './MenuDrawer-Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

// const HomeImgIcon = ({name, size, color}) => {
//     return <Image source={require('../../assets/inactiveHome.png')} style={{width:25, height:30}}/>;
// };

// const MyDoctorImgIcon = ({name, size, color}) => {
//     return <Image source={require('../../assets/inactiveMyDoctor.png')} style={{width:25, height:30}}/>

// };

const mainRoutes = [
    {
        name: '홈',
        inactiveIcon: require('../../assets/inactiveHome.png'),
        activeIcon: require('../../assets/activeHome.png'),
        com: MenuDrawerHome,
    },
    {
        name: '주치의',
        inactiveIcon: require('../../assets/inactiveDoctor.png'),
        activeIcon: require('../../assets/activeDoctor.png'),
        com: MenuDrawerMyDoctor,
    }
]

export default function TabNavigation() {
    return(
        <Tab.Navigator 
            initialRouteName="MenuDrawerHome"
            tabBarOptions={{
                style: { height: 55 },
                activeTintColor: '#6765E9',
                inactiveTintColor: '#7E84A3',
            }}    
        >
            {mainRoutes.map(route => (
                <Tab.Screen
                    key={'screen--${route.name}'}
                    name={route.name}
                    component= {route.com}
                    options={{
                        tabBarIcon:({focused}) => {
                            return (
                                <Image source={focused? route.activeIcon: route.inactiveIcon}
                                    style={{width:25, height:25}}
                                /> 
                            )
                        }
                    }}/>
            ))}
        </Tab.Navigator>
    )
}

