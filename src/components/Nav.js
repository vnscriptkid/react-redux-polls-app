import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <nav>
      <ul style={{ listStyle: "none" }}>
        <li style={{ float: "left", padding: 20 }}>
          <NavLink to="/" exact>
            <span>Home</span>
          </NavLink>
        </li>
        <li style={{ float: "left", padding: 20 }}>
          <NavLink to="/leaderboard" exact>
            Leaderboard
          </NavLink>
        </li>
        <li style={{ float: "left", padding: 20 }}>
          <NavLink to="/add" exact>
            Add Poll
          </NavLink>
        </li>
        <div
          style={{
            display: "block",
            content: "",
            clear: "both"
          }}
        />
      </ul>
    </nav>
  );
};
