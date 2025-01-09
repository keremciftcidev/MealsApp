import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsCategoriesScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: "All Categories",
            headerStyle: { backgroundColor: "#816363" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#f3e5e5" },
          }}
        >
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
          <Stack.Screen
            name="MealsOverview"
            component={MealsCategoriesScreen}
            // options={({route,navigation})=>{
            //   const catId = route.params.catId
            //   return{
            //     title:catId
            //   }
            // }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
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
