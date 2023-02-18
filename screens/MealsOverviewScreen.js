// import { useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummy-data";

export default function MealsOverviewScreen({ route, navigation }) {
  //   const route = useRoute(); if we need route in a non-screen component
  const catId = route.params.categoryId;
  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) !== -1;
  });

  useLayoutEffect(() => {
    // if useEffect is not used we get a warning
    // also useEffect loads with delay so we use useLayoutEffect
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}
