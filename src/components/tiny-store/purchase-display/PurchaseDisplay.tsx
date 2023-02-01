import React from "react";
import { IProduct } from "../models/IProduct";
import "./purchase-display.css";

interface IPurchaseDisplayProps {
  productPurchased: IProduct;
}

export const PurchaseDisplay = ({ productPurchased }: IPurchaseDisplayProps) => {
  return (
    <div className="Purchase-display-line">
      <h1>
        You purchased a {productPurchased.name} for a price ${productPurchased.price}
      </h1>
    </div>
  );
};
