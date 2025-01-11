import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  // We find the selected dish
  
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

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
