import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./components/header/Header";
import Main from "./pages/Main/Main";
import { Box } from "@mui/material";
import store from "./redux/store";
import { Provider } from "react-redux";
import BookInfo from "./pages/PageInfo/PageInfo";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    blue: {
      main: "#14668C",
    },
    secondary: {
      main: "#FFCE31",
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={outerTheme}>
          <Header />

          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/category/:bookName" element={<BookInfo />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
