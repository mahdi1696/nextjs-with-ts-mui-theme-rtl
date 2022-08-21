import * as React from "react";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  useColorScheme,
  
} from "@mui/material/styles";
import Moon from "@mui/icons-material/DarkMode";
import Sun from "@mui/icons-material/LightMode";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";


const ColorSchemePicker = () => {
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

export default function Page() {
  return (
    <Box bgcolor="background.paper" sx={{ p: 1 ,mt : 1}}>
     
      <Box sx={{ py: 2, mx: "auto" }}>
        <Box sx={{ pb: 4 }}>
          <ColorSchemePicker />
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
          <Button color="primary" variant="contained">
            primary
          </Button>
          <Button variant="outlined">primary</Button>
          <Button>primary</Button>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
          <Button color="secondary" variant="contained">
            secondary
          </Button>
          <Button color="secondary" variant="outlined">
            secondary
          </Button>
          <Button color="secondary">secondary</Button>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
          <Button color="error" variant="contained">
            error
          </Button>
          <Button color="error" variant="outlined">
            error
          </Button>
          <Button color="error">error</Button>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
          <Button color="info" variant="contained">
            info
          </Button>
          <Button color="info" variant="outlined">
            info
          </Button>
          <Button color="info">info</Button>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
          <Button color="warning" variant="contained">
            warning
          </Button>
          <Button color="warning" variant="outlined">
            warning
          </Button>
          <Button color="warning">warning</Button>
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4, mb: 1 }}>
          <Button color="success" variant="contained">
            success
          </Button>
          <Button color="success" variant="outlined">
            success
          </Button>
          <Button color="success">success</Button>
        </Box>
      </Box>
    </Box>
  );
}
