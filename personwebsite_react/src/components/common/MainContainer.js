import React from "react";
import Navigation from "./Navigation";

export default function MainContainer(props) {
  return (
    <main className="pt-5 mx-lg-5">
      <Navigation />
      <div id="main-section" className="container-fluid mt-5 main-section">
        {props.children}
      </div>
    </main>
  );
}
