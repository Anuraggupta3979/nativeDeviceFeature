import React, { useEffect } from "react";
import { StyleSheet, Platform, FlatList, Button } from "react-native";
// import { HeaderButtons } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";
// import CustomHeaderButton from "../components/CustomHeaderButton";
import Colors from "../constants/Colors";
import PlaceItem from "../components/PlaceItem";
import * as placesActions from "../store/places-actions";

const PlacesListScreen = (props) => {
  const places = useSelector((state) => state.places.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(placesActions.loadPlaces());
  }, [dispatch]);
  props.navigation.setOptions({
    title: "All Places",
    headerRight: () => (
      <Button
        title="add"
        onPress={() => {
          props.navigation.navigate("NewPlace");
        }}
      />
      //   <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      //     <Ionicons
      //       name={Platform.OS === "android" ? "md-add" : "ios-add"}
      //       size={25}
      //       color={Colors.primary}
      // onPress={() => {
      //   props.navigation.navigate("NewPlace");
      // }}
      //     />
      //   </HeaderButtons>
    ),
  });
  return (
    <FlatList
      data={places}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <PlaceItem
          image={itemData.item.imageUri}
          title={itemData.item.title}
          address={itemData.item.address}
          onSelect={() => {
            props.navigation.navigate("PlaceDetail", {
              placeTitle: itemData.item.title,
              placeId: itemData.item.id,
            });
          }}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});

export default PlacesListScreen;
