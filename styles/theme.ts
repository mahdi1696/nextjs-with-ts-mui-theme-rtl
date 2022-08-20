import { createTheme, ThemeOptions } from "@mui/material/styles";


export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
 /*  props: {
    MuiAppBar: {
      color: "transparent",
    },
  }, */
  spacing: 8,
  direction: "rtl",
};

export const theme = createTheme({
  direction: "rtl",
});
