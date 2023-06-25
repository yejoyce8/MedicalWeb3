import React from 'react';
import './App.css';
import * as myRoutes from "./constants/Routes";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//PAGES
import ApptBookingForm from './pages/ApptBookingForm';
import Home from './pages/Home';

//THEME
import customTheme from './theme';



const App = (): React.ReactElement => {
  return (
    <ChakraProvider theme={customTheme}>
      <Router>
        <Routes>
          <Route path={myRoutes.HOME_PAGE} element={<Home />} />
          <Route path={myRoutes.APPT_BOOK_PAGE} element={<ApptBookingForm />} />
            <Route path={myRoutes.LOGIN_PAGE} element={<Home />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
