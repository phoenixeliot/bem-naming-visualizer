import React from "react";
import { connect } from "react-redux";
import { setBemPart } from "features/bemParts/bemPartsSlice";

const BemPartInput = ({ disabled, partName, value, setBemPart }) => {
  return (
    <div>
      <input disabled={disabled} value={value.replace(/_/g, "")} onChange={(e) => setBemPart({ partName, value: e.target.value })}></input>
    </div>
  );
};

const mapDispatchToProps = {
  setBemPart,
};

export default connect(null, mapDispatchToProps)(BemPartInput);
