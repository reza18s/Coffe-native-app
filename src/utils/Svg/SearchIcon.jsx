import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

export default function SearchIcon(props) {
   return (
      <Svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 512 512"
         width={25}
         height={25}
         {...props}
      >
         {/* <Path fill="#252A32" d="M0 0H512V512H0z" /> */}
         <Circle
            cx={185.9}
            cy={196.6}
            r={142.3}
            fill="#252A32"
            stroke="#ca6036"
            strokeMiterlimit={10}
            strokeWidth={29}
         />
         <Path
            fill="#823b2a"
            d="M453.8 443.7L327.3 317.3c-4.2 5-9.2 10-13.3 14.1-3.3 3.3-6.7 5.8-10 9.2l126.4 127.3c6.7 6.7 16.6 6.7 23.3 0 5.9-6.7 6.7-17.5.1-24.2z"
         />
      </Svg>
   );
}
