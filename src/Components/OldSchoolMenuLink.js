import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });
  return (
    <div className={match ? "active" : ""}>
      {match && "> "}
      <Link to={to}>{label}</Link>
    </div>
  );
}

export default OldSchoolMenuLink;
