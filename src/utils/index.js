import { Dimensions, PixelRatio } from "react-native";

const screenWidth = Dimensions.get("window").width;

const baseWidth = 375;
const baseHeight = 667;

export const wp = width => {
  const elemWidth = parseFloat(width);

  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / baseWidth);
};

export const hp = height => {
  const elemheight = parseFloat(height);
  const screenHeight = (screenWidth * 16) / 9;

  return PixelRatio.roundToNearestPixel(
    (screenHeight * elemheight) / baseHeight
  );
};
