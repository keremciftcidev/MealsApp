import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator}from "@react-navigation/native-stack"
import MealsCategoriesScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="black" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='MealsCategories' component={CategoriesScreen}/>
          <Stack.Screen name='MealsOverview' component={MealsCategoriesScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#303031", 
  },
});
