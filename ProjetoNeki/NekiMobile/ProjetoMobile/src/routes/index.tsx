import React, { useState, useContext } from 'react';
import Login from '../pages/Login/index';
import Cadastro from '../pages/Cadastro/index';
import Home from '../pages/Home/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StackNavigation = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator>
        <StackNavigation.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <StackNavigation.Screen
          options={{ headerShown: false }}
          name="HomeS"
          component={Home}
        />
        <StackNavigation.Screen
          options={{ headerShown: false }}
          name="Cadastro"
          component={Cadastro}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
