import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import PowderFactor from './src/screens/PowderFactor';
import {NAVIGATIONS} from './src/constants';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#3b9aad',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}>
          <Stack.Screen
            name={NAVIGATIONS.HOME.name}
            component={Home}
            options={{title: NAVIGATIONS.HOME.title}}
          />
          <Stack.Screen
            name={NAVIGATIONS.POWDER_FACTOR.name}
            component={PowderFactor}
            options={{title: NAVIGATIONS.POWDER_FACTOR.title}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
