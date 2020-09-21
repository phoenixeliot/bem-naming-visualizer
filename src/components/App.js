import React from "react";

const App = () => (
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
      <div contentEditable>
        <span class="code code_block">block</span>
        <span class="code code_element">element</span>
        <span class="code code_modifier">modifier</span>
        <span class="code code_value">value</span>
      </div>
    </section>
    <section>
      <h2>Usage in HTML</h2>
    </section>
  </div>
);

export default App;
