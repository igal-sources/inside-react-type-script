import React, { useState } from "react";
import "./family.css";

export const Family = ({ familyTree }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const expand = () => {
    setIsVisible(!isVisible);
  };
  
  return (
    <div style={{ paddingLeft: 10 }}>
      <span className="expend-span" onClick={expand}>{familyTree.name}</span>
      {isVisible ? (
        familyTree?.children?.map((child: any, index: number) => {
          return (
            <div key={index} style={{ paddingLeft: 10 }}>
              <Family familyTree={child} />
            </div>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
