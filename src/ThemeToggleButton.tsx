import React from "react";

import { useColorScheme } from "@mui/material/styles";
import Moon from "@mui/icons-material/DarkMode";
import Sun from "@mui/icons-material/LightMode";
import Button from "@mui/material/Button";

export const ColorSchemePicker = () => {
  const { mode, setMode } = useColorScheme();

  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        if (mode === "light") {
          setMode("dark");
        } else {
          setMode("light");
        }
      }}
    >
      {mode === "light" ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ColorSchemePicker;
