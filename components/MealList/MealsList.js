import { FlatList,StyleSheet,View} from "react-native";
import MealItem from "./MealItem";


function MealList({items}) {
    // Her bir öğeyi render eden fonksiyon
  function renderMealItem(itemData) {
    const item = itemData.item;

    const mealItemProps = {
      id :item.id,
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
        data={items} // Gösterilecek öğeler listesi
        keyExtractor={(item) => item.id} // Benzersiz bir anahtar döndüren fonksiyon
        renderItem={renderMealItem} // Her bir öğeyi render eden fonksiyon
      />
    </View>
  );
}

export default MealList;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });