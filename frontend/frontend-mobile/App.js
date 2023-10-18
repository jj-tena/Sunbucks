import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/home';
import Product from './views/product';
import Cart from './views/Cart';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}