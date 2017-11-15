// import root from './App/reactnavigation-demo/root';
// export default root;

import React, {Component} from 'react';
import {Platform, ScrollView, View, Text} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
    DrawerNavigator,
    SafeAreaView,
    addNavigationHelpers
} from 'react-navigation';

import colors from './App/util/Colors';

import Login from './App/pages/login/LoginPage';
import Main from './App/pages/main/MainPage';
import Customer from './App/pages/customer/CustomerPage';
import Lists from './App/pages/list/ListPage';
import Category from './App/pages/category/CategoryPage';
import Other from './App/pages/other/OtherPage';


const CustomerStack = StackNavigator({
    Customer: {
        screen: Customer,
    },
    Login: {
        screen: Login,
    }
}, {
    mode: 'modal',
});



export const TabContainer = TabNavigator({
        Main: {
            screen: Main,
        },
        Category: {
            screen: Category,
        },
        Lists: {
            screen: Lists,
        },

        Customer: {
            screen: Customer,
        }
    },
    {
        lazy: true,
        swipeEnabled: false,
        tabBarOptions: {
            animationEnabled: false,
            activeTintColor: colors.appColor,
            style: {
                height: Platform.OS === 'ios' ? 50 : 65,
                backgroundColor: colors.white
            },
            activeBackgroundColor: colors.white,
            inactiveBackgroundColor: colors.white,
            inactiveTintColor: colors.tintColor,
            showIcon: true,
            indicatorStyle: {
                height: 0,
            },
            labelStyle: {
                fontSize: 12
            }
        },
        tabBarPosition: 'bottom'
    }
);



export const AppNavigator = StackNavigator({

    Home: {
        screen: TabContainer,
    },

    Other: {
        screen: Other,
    },
}, {
    headerMode: 'screen',

    navigationOptions: {
        headerBackTitle: null,
        headerStyle: {
            backgroundColor: colors.appColor,
            elevation: 0,
            height: 60
        },
        headerTitleStyle: {
            color: colors.white,
            fontSize: 20,
            alignSelf: 'center'
        },
        headerTintColor: colors.white
    }
});

export default AppNavigator;