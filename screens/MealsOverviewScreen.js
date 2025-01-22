
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useEffect } from "react";

import MealList from "../components/MealList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
 

  // Kategoriye göre filtreleme işlemi
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useEffect(() => {
    const catTitle = CATEGORIES.find((category) => category.id === catId).title;
    navigation.setOptions({
      title: catTitle,
    });
   
  }, [catId,navigation]);

  return <MealList items={displayedMeals}/>
}

export default MealsOverviewScreen;
