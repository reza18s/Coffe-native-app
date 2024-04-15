import { Svg, LinearGradient, Stop, Path } from "react-native-svg";
import { COLORS } from "../../theme/theme";

export default function MenuSvg(props) {
   return (
      <Svg width={25} height={25} xmlns="http://www.w3.org/2000/svg" {...props}>
         <Svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            width={25}
            height={25}
            {...props}
         >
            <LinearGradient
               id="a"
               x1={0}
               x2={227.556}
               y1={397.222}
               y2={397.222}
               gradientTransform="matrix(1 0 0 -1 0 511)"
               gradientUnits="userSpaceOnUse"
            >
               <Stop
                  offset={0}
                  stopColor={COLORS.primaryOrangeHex}
                  className="stopColore3e4e6 svgShape"
               />
               <Stop
                  offset={1}
                  stopColor={COLORS.primaryGreyHex}
                  className="stopColor7f8eb8 svgShape"
               />
            </LinearGradient>
            <Path
               fill="url(#a)"
               d="M227.556 56.889v113.778c0 31.292-25.601 56.889-56.889 56.889H56.889C25.601 227.556 0 201.958 0 170.667V56.889C0 25.597 25.601 0 56.889 0h113.778c31.288 0 56.889 25.597 56.889 56.889z"
            />
            <LinearGradient
               id="b"
               x1={284.445}
               x2={512}
               y1={397.222}
               y2={397.222}
               gradientTransform="matrix(1 0 0 -1 0 511)"
               gradientUnits="userSpaceOnUse"
            >
               <Stop
                  offset={0}
                  stopColor={COLORS.primaryOrangeHex}
                  className="stopColorc9f7f5 svgShape"
               />
               <Stop
                  offset={1}
                  stopColor={COLORS.primaryGreyHex}
                  className="stopColor47ebda svgShape"
               />
            </LinearGradient>
            <Path
               fill="url(#b)"
               d="M512 56.889v113.778c0 31.292-25.601 56.889-56.889 56.889H341.333c-31.288 0-56.889-25.597-56.889-56.889V56.889C284.444 25.597 310.045 0 341.333 0h113.778C486.399 0 512 25.597 512 56.889z"
            />
            <LinearGradient
               id="c"
               x1={284.445}
               x2={512}
               y1={112.778}
               y2={112.778}
               gradientTransform="matrix(1 0 0 -1 0 511)"
               gradientUnits="userSpaceOnUse"
            >
               <Stop
                  offset={0}
                  stopColor={COLORS.primaryOrangeHex}
                  className="stopColore3e4e6 svgShape"
               />
               <Stop
                  offset={1}
                  stopColor={COLORS.primaryGreyHex}
                  className="stopColor7f8eb8 svgShape"
               />
            </LinearGradient>
            <Path
               fill="url(#c)"
               d="M512 341.333v113.778C512 486.403 486.399 512 455.111 512H341.333c-31.288 0-56.889-25.597-56.889-56.889V341.333c0-31.292 25.601-56.889 56.889-56.889h113.778c31.288 0 56.889 25.598 56.889 56.889z"
            />
            <LinearGradient
               id="d"
               x1={0}
               x2={227.556}
               y1={112.778}
               y2={112.778}
               gradientTransform="matrix(1 0 0 -1 0 511)"
               gradientUnits="userSpaceOnUse"
            >
               <Stop
                  offset={0}
                  stopColor={COLORS.primaryOrangeHex}
                  className="stopColorc9f7f5 svgShape"
               />
               <Stop
                  offset={1}
                  stopColor={COLORS.primaryGreyHex}
                  className="stopColor47ebda svgShape"
               />
            </LinearGradient>
            <Path
               fill="url(#d)"
               d="M227.556 341.333v113.778c0 31.292-25.601 56.889-56.889 56.889H56.889C25.601 512 0 486.403 0 455.111V341.333c0-31.292 25.601-56.889 56.889-56.889h113.778c31.288 0 56.889 25.598 56.889 56.889z"
            />
         </Svg>
      </Svg>
   );
}
