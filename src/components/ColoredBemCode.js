import React from "react";
import { connect } from "react-redux";
import { setBemParts } from "features/bemParts/bemPartsSlice";
import ContentEditable from "react-contenteditable";

const generateSpans = (parts) => {
  return [
    `<span class="code code_unknown">${parts.unknown || ""}</span>`,
    `<span class="code code_block">${parts.block || ""}</span>`,
    `<span class="code code_element">${parts.element || ""}</span>`,
    `<span class="code code_modifier">${parts.modifier || ""}</span>`,
    `<span class="code code_value">${parts.value || ""}</span>`,
  ].join("");
};

const keys = ["unknown", "block", "element", "modifier", "value"];

const parseClass = (text) => {
  const partsRegex = /^(?<block>[a-zA-Z0-9\\-]+)(?<element>__[a-zA-Z0-9\\-]*)?(?<modifier>_[a-zA-Z0-9\\-]*)?(?<value>_[a-zA-Z0-9\\-]*)?$/;
  const match = text.match(partsRegex);
  if (match === null) {
    return { block: "", element: "", modifier: "", value: "", unknown: text };
  }
  const parts = match.groups;
  const plainParts = Object.assign({}, parts); // Make it serializable
  keys.forEach((key) => {
    plainParts[key] = plainParts[key] || "";
  });
  return plainParts;
};

const ColoredBemCode = ({ parts, setBemParts }) => {
  const html = generateSpans(parts);
  return (
    <ContentEditable
      className="editable-class-name"
      spellCheck="false"
      html={html}
      onChange={(e) => {
        const html = e.target.value;
        const el = document.createElement("div");
        el.innerHTML = html;
        const textContent = el.textContent;
        setBemParts(parseClass(textContent));
      }}
    />
  );
};

export const ColoredBemHtmlExample = ({ parts }) => {
  if (parts.unknown) {
    debugger;
    return <div></div>;
  }
  const mainParts = {
    block: parts.block,
    element: parts.element,
  };
  const allParts = {
    block: parts.block,
    element: parts.element,
    modifier: parts.modifier,
    value: parts.value,
  };
  const class1 = generateSpans(mainParts);
  const class2 = generateSpans(allParts);
  return (
    <p className="code code-block">
      <span>&lt;div class="</span>
      <span dangerouslySetInnerHTML={{ __html: class1 }}></span>
      {class1 !== class2 ? (
        <>
          <span> </span>
          <span dangerouslySetInnerHTML={{ __html: class2 }}></span>
        </>
      ) : null}
      <span>"&gt;</span>
    </p>
  );
};

const mapDispatchToProps = {
  setBemParts,
};

export default connect(null, mapDispatchToProps)(ColoredBemCode);
