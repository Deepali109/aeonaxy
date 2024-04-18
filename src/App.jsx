import { useState } from "react";

import "./App.css";
import HorizontalStepper from "./HorizontalStepper";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

function App() {
  return (
    <>
      <Container>
        <Box
          sx={{
            bgcolor: "white",
            display: "flex",
            justifyContent: "center",
            marginTop: "3rem",
          }}
        >
          <HorizontalStepper />
        </Box>
      </Container>
    </>
  );
}

export default App;
