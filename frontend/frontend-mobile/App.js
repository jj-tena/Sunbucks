import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/views/home';
import Product from './src/views/product';
import Cart from './src/views/cart';
import Order from './src/views/order';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Product' component={Product}/>
        <Stack.Screen name='Cart' component={Cart}/>
        <Stack.Screen name='Order' component={Order}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}