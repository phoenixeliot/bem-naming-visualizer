import React from "react";
import ColoredBemCode from "./ColoredBemCode";
import BemPartInput from "./BemPartInput";
import { connect } from "react-redux";

const App = ({ bemParts }) => {
  return (
    <div className="bem-editor">
      <section className="bem-editor__part-inputs">
        <h2>BEM parts</h2>
        <label>
          Block:
          <BemPartInput partName="block" value={bemParts.block} />
        </label>
        <label>
          Element:
          <BemPartInput partName="element" value={bemParts.element} />
        </label>
        <label>
          Modifier:
          <BemPartInput partName="modifier" value={bemParts.modifier} />
        </label>
        <label>
          Modifier value:
          <BemPartInput partName="value" value={bemParts.value} disabled={!bemParts.modifier} />
        </label>
      </section>
      <section className="bem-editor__class-name">
        <h2>Class name</h2>
        <ColoredBemCode parts={bemParts} />
        {bemParts.unknown ? <div className="bem-editor__parse-error">Invalid BEM pattern!</div> : null}
      </section>
      <section class="bem-editor__html-example">
        <h2>Usage in HTML</h2>
      </section>
    </div>
  );
};

const mapStateToProps = ({ bemParts }) => {
  return { bemParts };
};

export default connect(mapStateToProps, null)(App);
