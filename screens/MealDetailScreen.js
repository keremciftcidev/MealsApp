import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;

  // We find the selected dish
  
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>

      {/* Details */}
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />

      {/* Ingredients */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient) => (
          <Text key={ingredient} style={styles.listItem}>
            {ingredient}
          </Text>
        ))}
      </View>

      {/* Steps */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Steps</Text>
        {selectedMeal.steps.map((step) => (
          <Text key={step}>{step}</Text>
        ))}
      </View>
    </View>
  );
}

export default MealDetailScreen;


const styles = StyleSheet.create({});
