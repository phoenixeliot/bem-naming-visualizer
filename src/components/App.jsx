import React from "react";
import ColoredBemCode from "./ColoredBemCode";
import { connect } from "react-redux";

const App = ({ bemParts }) => {
  return (
    <div>
      <section>
        <h2>BEM parts</h2>
        <label>
          Block:
          <input></input>
        </label>
        <label>
          Element:
          <input></input>
        </label>
        <label>
          Modifier:
          <input></input>
        </label>
        <label>
          Modifier value:
          <input></input>
        </label>
      </section>
      <section>
        <h2>Class name</h2>
        <ColoredBemCode parts={bemParts} />
      </section>
      <section>
        <h2>Usage in HTML</h2>
      </section>
    </div>
  );
};

const mapStateToProps = ({ bemParts }) => {
  return { bemParts };
};

export default connect(mapStateToProps, null)(App);
