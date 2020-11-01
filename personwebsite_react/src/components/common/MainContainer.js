import React from "react";

export default function MainContainer(props) {
  return (
    <main className="pt-5 mx-lg-5">
      <div id="main-section" className="container-fluid mt-5 main-section">
        {props.children}
      </div>
    </main>
  );
}
