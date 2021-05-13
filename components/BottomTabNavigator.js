import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import FackBook from "../screens/FackBook";
import InstaGram from "../screens/InstaGram";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="FackBook" component={FackBook} />
          <Tab.Screen name="Insta" component={InstaGram} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
