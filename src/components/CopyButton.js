import React from "react";

const CopyButton = (props) => {
  return (
    <React.Fragment>
      <button
        className="ui secondary basic button"
        onClick={() => props.onClick(props.lang)}
      >
        <i className="copy icon"></i>
        Copy
      </button>
      <div className="ui horizontal label">{props.msg}</div>
    </React.Fragment>
  );
};

export default CopyButton;
