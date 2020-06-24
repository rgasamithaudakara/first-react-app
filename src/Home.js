import React from "react";
import "./App.css";
import ScrollUpButton from "./SimpleComponents/ScrollUpButton";

export default function HOME() {
  return (
    <React.Fragment>
      <div className="PageColor">
        <h1 className="Title">HOME</h1>  
      </div>
      <ScrollUpButton className="ScrollUpButton" ToggledStyle={{right: 100}}/>
    </React.Fragment>
  );
}
