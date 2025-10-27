import React from "react";
import "./App.css";
import Welcome from "./Components/0.Basics/1.Welcome";
import { Funct1, Funct2 } from "./Components/0.Basics/1.ZunoFun";
import MapMethod from "./Components/0.Basics/MapMethod";
import InlineRendring from "./Components/0.Basics/InlineRendring";
import LogInLogOut from "./Components/1.ConditionRendering/LogInLogOut";
import Simple from "./Components/1.ConditionRendering/Simple-1";
// import Parent1 from "./Components/2.Props/Parent1";
import ToggleState from "./Components/4.ClickEvents/ToggleState";
import Form from "./Components/4.ClickEvents/Form";
import Parent1 from "./Components/5.PassingFuncAsProps/Parent1";
// import Parent from "./Components/6.PropDrilling/Parent";
// import Parent from "./Components/7.ContextAPI/component/Parent";
import MyForm from "./Components/8.Form/MyForm";
import Useref from "./Components/9.useRefUses/useRef";
// import Rendering from "./Components/10.UseEffect/Rendering1";
import CleanUp from "./Components/10.UseEffect/CleanUp";
import Memoization from "./Components/11.UseCallback/Memoization";
import Parent from "./Components/11.UseCallback/Parent";
import Memo from "./Components/12.UseMemo/Memo";
import AppRoute from "./Components/14.Router/AppRoute";
import LinkRoute from "./Components/14.Router/LinkRoute/LinkRoute";

function App() {
  return (
    <>
      <center>
        {/* ----------  Class Component  ----------- */}
        {/* <Welcome></Welcome> */}
        {/* --------- Exportingn two functions at a time --------- */}
        {/* <hr />
        <Funct1></Funct1>
        <Funct2></Funct2>
        <hr /> */}
        {/* ----- Map Method ---- */}
        {/* <hr />
        <MapMethod></MapMethod>
        <hr /> */}
        {/* -------- Inline Rendering using map() ------ */}
        {/* <hr />
        <InlineRendring />
        <hr /> */}

        {/* -----------  Conditional rendering  ------------ */}
        {/* <hr />
        <Simple></Simple>
        <hr /> */}

        {/* -------- Passing props -------- */}
        {/* <hr />
        <Parent1></Parent1>
        <hr /> */}

        {/* -------- Passing children -------- */}
        <hr />
        <Parent />
        <hr />

        {/* -------- Passing children -------- */}
        {/* <hr />
        <ToggleState />
        <Form></Form>
        <hr /> */}

        {/* -------- Passing function as props -------- */}
        {/* <hr />
        <Parent1></Parent1>
        <hr /> */}

        {/* --------------  PropDrilling  -------------- */}
        {/* <hr />
        <Parent />
        <hr /> */}

        {/* ------------   ContextAPI   --------------- */}

        {/* <hr />
        <h3>ContextAPI</h3>
        <Parent />
        <hr /> */}

        {/* ----------- React Form   ------------ */}

        {/* <hr />
        <h3>React Form</h3>
        <p>Controlled vs UnControlled Form</p>
        <MyForm></MyForm>
        <hr /> */}

        {/* --------------  useRef uses  -------------- */}

        {/* <hr />
        <h3>Use of useRef</h3>
        <Useref />
        <hr /> */}

        {/* --------------  useEffect   -------------- */}
        {/* <hr />
        <h3>effect Rendering check in console</h3>
        <Rendering />
        <CleanUp />
        <hr /> */}

        {/* -------------- useCallback   --------------- */}
        {/* <hr />
      <Memoization />
      <Parent />
      <hr /> */}
        {/* -------------- useMemo ------------- */}
        <hr />
        <Memo />
        <hr />
        {/* ------------  Router  ------------ */}
      </center>

      <hr />
      <AppRoute />
      <LinkRoute />
      <hr />
    </>
  );
}

export default App;
