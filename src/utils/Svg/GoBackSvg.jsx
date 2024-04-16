import * as React from "react";
import Svg, { Path } from "react-native-svg";

function GoBackSvg(props) {
   return (
      <Svg width={25} height={25} {...props}>
         <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            width={25}
            height={25}
            {...props}
         >
            <Path
               fill="#d17842"
               d="M52.07 26.614c-7.092-7.677-17.112-8.83-21.592-8.932v-9.17a.511.511 0 00-.795-.423L4.223 25.414a.51.51 0 000 .845l25.46 17.325a.507.507 0 00.795-.422v-9.1c19.774-.37 28.288 21.387 28.373 21.61a.51.51 0 00.984-.147c.876-12.658-1.737-22.385-7.765-28.91z"
               className="color58595b svgShape"
            />
         </Svg>
      </Svg>
   );
}

export default GoBackSvg;
