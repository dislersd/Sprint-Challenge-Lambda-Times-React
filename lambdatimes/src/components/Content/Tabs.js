import React from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => (
          <Tab
            tab={tab}
            selectTab={props.selectTab}
            selected={props.selected}
            key={tab}
          />
        ))}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
  tabs: PropTypes.array
};

export default Tabs;
