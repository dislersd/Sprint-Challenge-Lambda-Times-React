import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TabsParagraph = styled.p`
  margin: 0 10px;
  cursor: pointer;
`;

const Tab = props => {
  if (props.selected === props.tab) {
    var tabStyle = "tab active-tab";
  } else {
    var tabStyle = "tab";
  }
  return (
    <div
      className={`${tabStyle}`}
      onClick={() => {
        props.selectTab(props.tab);
      }}
    >
      <TabsParagraph>{props.tab.toUpperCase()}</TabsParagraph>
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string
};

export default Tab;
