import MapView, { Marker } from "react-native-maps";

import { StyleSheet, View } from "react-native";

const MapScreen = ({ route }) => {
  const { longitude, latitude } = route.params.location;

console.log(route.params);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker title="I am here" coordinate={{ latitude, longitude }} />
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  mapStyle: {
    flex: 1,
  },
});