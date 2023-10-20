import { Dimensions } from "react-native";
const theme = {
  colors: {
    white: "#FFF",
    whiteHighlight: "#F3FAFF",
    blueDark: "#3D4D78",
    blueLight: "#D0E8F9",
    blueLightest: "#DAEEFC",
    danger: "#EA638C",
    dangerHighlight: "#ED9CB5",
    gray: "#9E9FBE",
  },
  fontSizes: {
    small: "12px",
    normal: "16px",
    large: "20px",
  },
  fontWeight: {
    light: "Montserrat_300Light",
    medium: "Montserrat_500Medium",
    bold: "Montserrat_700Bold",
  },
  borderRadius: {
    small: "8px",
  },
  screenSize: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
};

export default theme;


