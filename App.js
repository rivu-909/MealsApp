// import "react-native-gesture-handler";
// import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import FavouritesContextProvider from "./store/context/favourites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
// we can also add nested navigator in the tutorial a drawer navigator is add
// the following can be done by adding the DrawerNavigator as the component of Stack Navigator

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="categories" component={CategoriesScreen} />
//     </Drawer.Navigator>
//   );
// }

const Tab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: "#351401" },
        tabBarItemStyle: {
          paddingVertical: 4,
        },
      }}
      sceneContainerStyle={{ backgroundColor: "#3f2f25" }}
    >
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="home"
              color={focused ? color : "white"}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Favorites",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name="star"
              color={focused ? color : "white"}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavouritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              //for setting default for all the screens
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={BottomTabNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   return { title: catId };
              // }}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{
                // headerRight: () => JSX element
                title: "About the meal",
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavouritesContextProvider> */}
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
