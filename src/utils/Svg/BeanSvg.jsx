import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BeanSvg(props) {
   return (
      <Svg width={25} height={25} xmlns="http://www.w3.org/2000/svg" {...props}>
         <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={256}
            height={256}
            {...props}
         >
            <Path
               fill="#d17842"
               d="M12 0C7 0 3 5.38 3 12s4 12 9 12 9-5.38 9-12-4-12-9-12zm.42 21.78A.5.5 0 0112 22h-.14a.5.5 0 01-.36-.48 28.1 28.1 0 00-.82-7.52A20.9 20.9 0 0110 8.5a11.19 11.19 0 011.58-6.28.49.49 0 01.56-.2.5.5 0 01.36.48 28.1 28.1 0 00.82 7.5 20.9 20.9 0 01.68 5.5 11.19 11.19 0 01-1.58 6.28z"
               data-name="Coffee Bean"
               className="color303c42 svgShape"
            />
         </Svg>
      </Svg>
   );
}

export default BeanSvg;
