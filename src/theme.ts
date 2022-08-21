import { experimental_extendTheme } from "@mui/material/styles";
import { teal, deepOrange, orange, cyan } from "@mui/material/colors";

const theme = experimental_extendTheme({
  direction: "rtl",
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
});

export default theme;
