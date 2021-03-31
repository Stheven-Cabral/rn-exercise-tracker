import * as React from "react";
import Svg, { G, Path, Ellipse } from "react-native-svg";

const StarIcon = () => {
  return (
    <Svg
      height={45}
      viewBox="0 0 390 500"
      width={50}
      fill="white"
      fillRule={'evenodd'}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M448 208H301L256 64l-45 144H64l119.1 89.3L136 448l120-96 120 96-47.1-150.7z" />
    </Svg>
  )
}

export default StarIcon