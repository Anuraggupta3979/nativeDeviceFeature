import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import PlacesNavigation from "./navigation/PlacesNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { init } from "./helpers/db";
import PlacesReducers from "./store/places-reducer";
init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch((err) => {
    console.log("Initializing db failed.");
    console.log(err);
  });

const rootReducer = combineReducers({
  places: PlacesReducers,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PlacesNavigation />
      </NavigationContainer>
    </Provider>
  );
}
