import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home/Home';
import { NavigationContainer } from '@react-navigation/native';
import NewTodo from '../pages/NewTodo/NewTodo';
import { type RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const RouteStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="newTodo" component={NewTodo} />
    </Stack.Navigator>
  );
};

const RootRoutes = () => {
  return (
    <NavigationContainer>
      <RouteStack />
    </NavigationContainer>
  );
};

export default RootRoutes;
