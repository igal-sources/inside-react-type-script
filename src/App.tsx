import React, { lazy } from "react";
// import TestComponent from './components/TableComponent';
import HtmlTableComponent from "./components/HtmlTableComponent";
import ClassComponent from "./components/ClassComponent";
import { LoginFormUncontrolled } from "./components/LoginFormUncontrolled";
import { LoginFormControlled } from "./components/login-form-controlled/LoginFormControlled";
// import { ListWithAddItem } from "./components/list-with-add-item/ListWithAddItem";
import ReactLayouts from "./components/react-layouts/ReactLayouts";
import "./App.css";

const ListWithAddItem = lazy(() => import("./components/list-with-add-item/ListWithAddItem"));

function App() {

  return (
    <div className="App">
      <ReactLayouts />
    </div>
  );
}

export default App;
