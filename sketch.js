import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FaceBookScreen from './fb';

function FacebookScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Facebook!</Text>
    </View>
  );
}

function IntagramScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Instagram</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Facebook" component={FaceBookScreen} />
        <Tab.Screen name="Instagram" component={InstagramScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}