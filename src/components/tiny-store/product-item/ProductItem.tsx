import React from "react";
import { IProduct } from "../models/IProduct";
import "./product-item.css";

interface IProductProps {
  product: IProduct;
  onBuy(product: IProduct): void;
}

export const ProductItem = ({ product, onBuy }: IProductProps) => {
  return (
    <div className="App-item">
      <div className="Product-name-container">
        <h3>{product.name}</h3>
        <button className="App-button" onClick={() => onBuy(product)}>
          Buy
        </button>
      </div>
      <div>
        <img src={product.image} alt={product.name} style={{ width: "200px" }} />
      </div>
      <div className="Price-item">price ${product.price}</div>
    </div>
  );
};
