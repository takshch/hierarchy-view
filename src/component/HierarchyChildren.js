import React from "react";
import Hierarchy from "./Hierarchy";

export default function HierarchyChildren({ shouldShowChildren, children }) {
  return (
    <div className="hierarchy__children">
      {shouldShowChildren &&
        children.map((child, index) => {
          console.log("child", child);
          return <Hierarchy key={index} data={child} />;
        })}
    </div>
  );
}
