import React, { useEffect, useState } from "react";
import getAllCards from "../services/getAllCards";
import Hierarchy from "./Hierarchy";

export default function HierarchyContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [allCards, setAllCards] = useState(null);

  useEffect(() => {
    //only fetchs on mount
    getAllCards().then((allCards) => {
      setIsLoading(false);
      setAllCards(allCards);
    });
  }, []);

  return (
    <div>
      {isLoading ? (
        "It's loading"
      ) : (
        <React.Fragment>
          {allCards ? (
            <React.Fragment>
              <Hierarchy data={allCards} />
            </React.Fragment>
          ) : null}
        </React.Fragment>
      )}
    </div>
  );
}
