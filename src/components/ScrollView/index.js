import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { compose } from "recompose";

import { hp, wp } from "../../utils";
import { withLoader } from "../withLoader";

function NkScrollView({ children, containerStyle }) {
  return (
    <ScrollView
      contentContainerStyle={[styles.contentContainerStyle, containerStyle]}
      keyboardShouldPersistTaps="handled"
    >
      {children}
    </ScrollView>
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
