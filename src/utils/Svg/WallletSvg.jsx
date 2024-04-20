import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { COLORS } from "../../theme/theme";

function WalletSvg(props) {
   return (
      <Svg
         width={30}
         height={30}
         viewBox="0 0 50 38"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         {...props}
      >
         <Path
            d="M47.523.375H2.93c-1.487 0-2.478.94-2.478 2.351v32.922C.452 37.06 1.443 38 2.93 38h44.593C49.009 38 50 37.06 50 35.648V23.89H32.658c-2.725 0-4.955-2.116-4.955-4.703 0-2.586 2.23-4.703 4.955-4.703H50V2.726c0-1.41-.991-2.351-2.477-2.351z"
            fill={COLORS.primaryOrangeHex}
         />
         <Path
            d="M32.659 21.539c1.368 0 2.477-1.053 2.477-2.352 0-1.298-1.109-2.351-2.477-2.351-1.368 0-2.477 1.053-2.477 2.351 0 1.3 1.109 2.352 2.477 2.352z"
            fill={COLORS.primaryOrangeHex}
         />
      </Svg>
   );
}

export default WalletSvg;
