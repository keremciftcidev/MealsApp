import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsCategoriesScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import {Ionicons}  from "@expo/vector-icons"

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#816363" },
        headerTintColor: "white",
        contentStyle: { backgroundColor: "#f3e5e5" },
        drawerContentStyle: { backgroundColor: "#816363"},
        drawerActiveTintColor:"white",drawerInactiveTintColor:"#ffffffb1"
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon:({color,size})=><Ionicons name="list" color={color}size={size}/>
        
          
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon:({color,size})=><Ionicons name="star" color={color}size={size}/>
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#816363" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#f3e5e5" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{ headerShown: false, tint: "red" }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsCategoriesScreen}
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{ title: "About the Meal" }}
          />
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
