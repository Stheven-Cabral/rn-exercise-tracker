import * as React from "react"
import Svg, { G, Path, Ellipse } from "react-native-svg"

function DumbbellIcon(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 464 280" {...props}>
      <G data-name="Layer 2">
        <G data-name="Layer 1">
          <Path d="M4 109.5h330v61H4z" />
          <Path d="M333.5 110v60H4.5v-60h329m1-1H3.5v62h331v-62z" fill="#fff" />
          <Ellipse cx={354.5} cy={140} rx={62} ry={140} />
          <Ellipse cx={109.5} cy={140} rx={62} ry={140} />
          <Ellipse cx={47.5} cy={140} rx={47.5} ry={107.26} />
          <Ellipse cx={416.5} cy={140} rx={47.5} ry={107.26} />
        </G>
      </G>
    </Svg>
  )
}

export default DumbbellIcon