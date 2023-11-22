import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar ">
      <div className="sidebar-item">
        <div className="sidebar-item-circle">
          <img src="/rob.svg" className="sidebar-item-logo" />
        </div>

        <div>Item 1</div>
      </div>

      <div className="sidebar-item">
        <div className="sidebar-item-circle">
          <img src="/rob.svg" className="sidebar-item-logo" />
        </div>

        <div>Item 2</div>
      </div>
    </div>
  );
};

export default Sidebar;
