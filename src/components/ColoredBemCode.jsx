import React, { useState } from "react";
import { connect } from "react-redux";
import { setBemParts } from "features/bemParts/bemPartsSlice";
import ContentEditable from "react-contenteditable";

const generateSpans = (parts) => {
  // const parts = parseClass(text);

  return [
    `<span class="code code_block">${parts.block}</span>`,
    `<span class="code code_element">${parts.element}</span>`,
    `<span class="code code_modifier">${parts.modifier}</span>`,
    `<span class="code code_value">${parts.value}</span>`,
  ].join("");
};

const parseClass = (text) => {
  const partsRegex = /(?<block>[a-zA-Z0-9\\-]+)(?<element>__[a-zA-Z0-9\\-]*)?(?<modifier>_[a-zA-Z0-9\\-]*)?(?<value>_[a-zA-Z0-9\\-]*)?/;
  const parts = text.match(partsRegex).groups;
  const plainParts = Object.assign({}, parts); // Make it serializable
  Object.keys(plainParts).forEach((key) => {
    plainParts[key] = plainParts[key] || "";
  });
  debugger;
  return plainParts;
};

const ColoredBemCode = ({ parts, setBemParts }) => {
  const html = generateSpans(parts);
  debugger;
  return (
    <ContentEditable
      html={html}
      onChange={(e) => {
        const html = e.target.value;
        const el = document.createElement("div");
        el.innerHTML = html;
        const textContent = el.textContent;
        debugger;
        setBemParts(parseClass(textContent));
      }}
    />
  );
};

const mapDispatchToProps = {
  setBemParts,
};

export default connect(null, mapDispatchToProps)(ColoredBemCode);
