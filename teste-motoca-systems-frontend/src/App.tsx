import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddMoto from "./pages/AddMoto";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const App = () => {
  const theme = createTheme({
    palette: {
      mode: "dark", // Define o modo escuro como padrão
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-moto/:id?" element={<AddMoto />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
