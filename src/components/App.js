import React from "react";
import ColoredBemCode, { ColoredBemHtmlExample } from "./ColoredBemCode";
import BemPartInput from "./BemPartInput";
import { connect } from "react-redux";

const App = ({ bemParts }) => {
  return (
    <div className="bem-editor">
      <section className="bem-editor__part-inputs">
        <h2>BEM parts</h2>
        <div className="bem-editor__input-list">
          <label className="bem-editor__input-row">
            Block:
            <BemPartInput partName="block" value={bemParts.block} />
          </label>
          <label className="bem-editor__input-row">
            Element:
            <BemPartInput partName="element" value={bemParts.element} />
          </label>
          <label className="bem-editor__input-row">
            Modifier:
            <BemPartInput partName="modifier" value={bemParts.modifier} />
          </label>
          <label className="bem-editor__input-row">
            Modifier value:
            <BemPartInput partName="value" value={bemParts.value} disabled={!bemParts.modifier} />
          </label>
        </div>
      </section>
      <section className="bem-editor__class-name">
        <h2>Class name</h2>
        <ColoredBemCode parts={bemParts} />
        {bemParts.unknown ? <div className="bem-editor__parse-error">Invalid BEM pattern!</div> : null}
      </section>
      <section className="bem-editor__html-example">
        <h2>Usage in HTML</h2>
        <ColoredBemHtmlExample parts={bemParts} />
      </section>
    </div>
  );
};

const mapStateToProps = ({ bemParts }) => {
  return { bemParts };
};

export default connect(mapStateToProps, null)(App);
