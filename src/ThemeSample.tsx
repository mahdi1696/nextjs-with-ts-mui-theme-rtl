import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ColorSchemePicker from "./ThemeToggleButton";

export default function Page() {
  return (
    <Box bgcolor="background.paper" sx={{ p: 1 }}>
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
