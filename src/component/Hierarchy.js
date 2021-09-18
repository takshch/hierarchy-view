import React, { useState } from "react";
import Card from "./Card/index";
import HierarchyChildren from "./HierarchyChildren";

export default function Hierarchy({ data }) {
  const { percentage, details, children, title } = data;
  const [showChildren, setShowChildren] = useState(false);
  const shouldShowChildren = () => showChildren && children;

  return (
    <div className="hierarchy">
      <Card
        title={title}
        percentage={percentage}
        details={details}
        children={children}
        onClick={() => {
          setShowChildren(!showChildren);
        }}
      />
      <HierarchyChildren
        shouldShowChildren={shouldShowChildren()}
        children={children}
      />
    </div>
  );
}
