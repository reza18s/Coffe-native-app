import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Heart_outline(props) {
   return (
      <Svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 24 24"
         width={25}
         height={25}
         {...props}
      >
         <Path
            fill="none"
            fillRule="evenodd"
            stroke="#ff1306"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.761 20.854a34.84 34.84 0 01-6.022-4.689 11.99 11.99 0 01-2.866-4.57c-1.076-3.345.18-7.174 3.698-8.307a5.978 5.978 0 015.425.913h0a5.987 5.987 0 015.425-.913c3.517 1.133 4.783 4.962 3.707 8.307a11.99 11.99 0 01-2.866 4.57 34.84 34.84 0 01-6.022 4.689l-.235.146-.244-.146zm3.978-13.801a2.782 2.782 0 011.917 2.422"
            className="colorStroke200E32 svgStroke"
         />
      </Svg>
   );
}

export default Heart_outline;
