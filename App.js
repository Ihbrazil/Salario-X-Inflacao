import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaSalario from './componentes/Salario';
import TelaInflacao from './componentes/Inflacao';
import TelaSalarioInflacao from './componentes/SalarioInflacao';

import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const Abas = createBottomTabNavigator();

export default function App () {
  return (
    <NavigationContainer>

      <Abas.Navigator>

        <Abas.Screen
          name="Tela Salário"
          component = { TelaSalario }
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="attach-money" size={24} color={ color } />
            ),
          }}/>

        <Abas.Screen
          name="Tela Inflação"
          component = { TelaInflacao }
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="trending-up" size={24} color={ color } />
            ),
          }} />
        
        <Abas.Screen
          name="Tela Salário X Inflação"
          component = { TelaSalarioInflacao }
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="compare-arrows" size={24} color={ color } />
            )
          }} />
      </Abas.Navigator>
    </NavigationContainer>
  );
}