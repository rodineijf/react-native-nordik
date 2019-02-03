import LottieView from "lottie-react-native";
import React from "react";
import { StyleSheet, View } from "react-native";

const animation = require("../../../assets/animations/loader.json");

export function withLoader(WrappedComponent) {
  return ({ isLoading, ...props }) => {
    return isLoading ? (
      <View style={styles.container}>
        <LottieView autoPlay source={animation} style={styles.animation} />
      </View>
    ) : (
      <WrappedComponent {...props} />
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    height: 120,
    width: 120,
  },
});
