import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../screens/basic/Splash';
import Splash1 from '../screens/basic/Splash1';
import Splash2 from '../screens/basic/Splash2';
import Splash3 from '../screens/basic/Splash3';
import Toptab from './toptab/Toptab';
import Download from './toptab/Download';
import Notification from './toptab/Notification';
import Drawer1 from './drawer/Drawer1'





const Stack = createNativeStackNavigator();

export default Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
       
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="Splash1" component={Splash1}/>
        <Stack.Screen name="Splash2" component={Splash2}/>
        <Stack.Screen name="Splash3" component={Splash3}/> 
        <Stack.Screen name="Toptab" component={Toptab}/> 
        <Stack.Screen name="Download" component={Download}/>
        <Stack.Screen name="Notification" component={Notification}/>
         <Stack.Screen name="Drawer1" component={Drawer1} />
        </Stack.Navigator>
     </NavigationContainer>
  );
};