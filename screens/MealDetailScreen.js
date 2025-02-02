import { View, Text, Image, StyleSheet, ScrollView, Button } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({ route ,navigation }) {

  const favoriteMealsCtx= useContext(FavoritesContext)
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId)


  function changeFavoriteStatusHandler(){
    if(mealIsFavorite){
      favoriteMealsCtx.removeFavorite(mealId)
    }else{
      favoriteMealsCtx.addFavorite(mealId)
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight:()=>{
        return <IconButton color={"white"} icon={mealIsFavorite ? "star" : "star-outline"} onPress={changeFavoriteStatusHandler}/>
      }
    })
  
    
  }, [navigation,changeFavoriteStatusHandler])

  // We find the selected dish
  

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }}  />
      <Text style={styles.title}>{selectedMeal.title}</Text>

      {/* Details */}
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />

      {/* Ingredients */}
      <Subtitle>Ingredients</Subtitle>
       <List data={selectedMeal.ingredients}/>
      

      {/* Steps */}
        <Subtitle>Steps</Subtitle>
        <List data={selectedMeal.steps}/>
      </ScrollView>
    
  );
}

export default MealDetailScreen;


const styles = StyleSheet.create({

  rootContainer:{
    marginBottom:32
  },
  image:{
    width:"100%",
    height:350
  },
  title:{
    fontWeight:"bold",
    fontSize:24,
    margin:8,
    textAlign:"center",
    color:"#5e4646"
    
  },
 
});
