import React from "react";
import { connect } from "react-redux";
import { setBemParts } from "features/bemParts/bemPartsSlice";
import ContentEditable from "react-contenteditable";

const generateSpans = (parts) => {
  debugger;
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
    debugger;
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
  debugger;
  const html = generateSpans(parts);
  return (
    <ContentEditable
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

const mapDispatchToProps = {
  setBemParts,
};

export default connect(null, mapDispatchToProps)(ColoredBemCode);
