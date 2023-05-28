import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
