import React from "react";
import { StyleSheet, View } from "react-native";
import { compose } from "recompose";

import { hp, wp } from "../../utils";
import { withLoader } from "../withLoader";

function NkView({ children, style }) {
  return <View style={[styles.view, style]}>{children}</View>;
}

export default compose(
  withLoader,
  React.memo
)(NkView);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingHorizontal: wp(24),
    paddingVertical: hp(24),
  },
});
