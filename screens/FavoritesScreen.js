
import { useContext } from "react";
import MealList from "../components/MealList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { StyleSheet,View,Text } from "react-native";


function FavoritesScreen() {
  const favoriteMealCtx = useContext(FavoritesContext)
  const favoritesMeals = MEALS.filter(meal => favoriteMealCtx.ids.includes(meal.id))

  if(favoritesMeals.length === 0){
    return <View style={styles.rootContainer}>
      <Text style={styles.text}>You have not favorite meals yet.</Text>
    </View>
  }

  return <MealList items={favoritesMeals}/>


}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    fontSize:18,
    fontWeight:"bold"
  }

})
