import React from "react";
import { ScrollView, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { compose } from "recompose";

import { hp, wp } from "../../utils";
import { withLoader } from "../withLoader";

type Props = {
  children: React.ReactNode,
  containerStyle: StyleProp<ViewStyle>,
  backgroundColor: string,
};

function NkScrollView({ children, containerStyle, backgroundColor = "transparent" }: Props) {
  const outterContainerStyle = {
    backgroundColor,
    flex: 1,
  };

  return (
    <View style={outterContainerStyle}>
      <ScrollView
        contentContainerStyle={[styles.contentContainerStyle, containerStyle]}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    </View>
  );
}

export default compose(
  withLoader,
  React.memo
)(NkScrollView);

const styles = StyleSheet.create({
  contentContainerStyle: {
    alignItems: "center",
    paddingHorizontal: wp(24),
    paddingTop: hp(24),
    paddingBottom: hp(40),
  },
});
