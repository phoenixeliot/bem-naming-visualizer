import React from "react";
import BemEditor from "./BemEditor";
import { connect } from "react-redux";

const App = ({ bemParts }) => {
  return <BemEditor bemParts={bemParts} />;
};

const mapStateToProps = ({ bemParts }) => {
  return { bemParts };
};

export default connect(mapStateToProps, null)(App);
