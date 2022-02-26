import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import MapScreen from "../screens/MapScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";

// CreateSwitchNavigator
const Stack = createNativeStackNavigator();

function PlacesNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Places" component={PlacesListScreen} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
      <Stack.Screen name="NewPlace" component={NewPlaceScreen} />
      <Stack.Screen name="Map" component={MapScreen} />
    </Stack.Navigator>
  );
}

export default PlacesNavigation;
