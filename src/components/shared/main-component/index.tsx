import React from "react";

const MainComponent: React.FC = ({ children }) => {
  return (
    <div className="d-flex flex-column sticky-footer-wrapper">
      header
      {children}
      footer
    </div>
  )
};

export default MainComponent;
