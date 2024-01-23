import { Box } from "@mui/material";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: "rgb(16, 20, 24)",
      }}
    >
      
      <Home />
    </Box>
  );
}

export default App;
