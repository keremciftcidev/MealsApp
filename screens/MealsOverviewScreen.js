import { FlatList, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
  const catId = route.params.categoryId;
  const catTitle = route.params.categoryTitle;

  // Kategoriye göre filtreleme işlemi
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  // Her bir öğeyi render eden fonksiyon
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };

    return <MealItem {...mealItemProps} />;
  }

 
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals} // Gösterilecek öğeler listesi
        keyExtractor={(item) => item.id} // Benzersiz bir anahtar döndüren fonksiyon
        renderItem={renderMealItem} // Her bir öğeyi render eden fonksiyon
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
