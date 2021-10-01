import React from "react";
import { Route } from "react-router-dom";
import Main from "./components/main/index";


const App = () => {
  return (
    <>
      
      <Route exact path="/" component={Main} />

    </>
  );
};

export default App;
