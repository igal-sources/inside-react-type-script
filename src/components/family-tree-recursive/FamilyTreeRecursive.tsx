import React from "react";
import { familyTree } from "./data";
import { Family } from "./Family";

const FamilyTreeRecursive = () => {
  return (
    <div>
      <Family familyTree={familyTree} />
    </div>
  );
};

export default FamilyTreeRecursive;
