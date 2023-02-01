import React, { useState } from "react";
import { IProduct } from "./models/IProduct";
import { ProductItem } from "./product-item/ProductItem";
import { PurchaseDisplay } from "./purchase-display/PurchaseDisplay";
import "./tiny-store.css";

const InitialProducts: IProduct[] = [
  { id: 1, name: "Coffee", image: "./images/food-coffee-chashka-makro.jpg", price: 15 },
  { id: 2, name: "Ice cream", image: "./images/food-ice-cream-food.jpg", price: 25 },
  { id: 3, name: "Food", image: "./images/food-ponchiki-vypechka-sladkoe-3289.jpg", price: 35 },
];

export const TinyStore = () => {
  const [products, setProducts] = useState<any>(InitialProducts);
  const [isProductBought, setIsProductBought] = useState<boolean>(false);
  const [productBought, setProductBought] = useState<any>({ id: 0, name: "", image: "", price: 0 });

  const handlePurchase = (product: IProduct) => {
    setProductBought(product);
    setIsProductBought(true);
    console.log("handleBuy", product);
  };

  return (
    <>
      <div className="header">
        <span>💓</span>
        <span>☎️</span>
        <span>💮</span>
      </div>
      <h1 className="Tiny-store">Tiny Store</h1>
      {isProductBought ? (
        <PurchaseDisplay productPurchased={productBought} />
      ) : (
        <div className={"App-container"}>
          {products
            .sort((a: any, b: any) => {
              return a.name > b.name ? 1 : -1;
            })
            .map((product: any) => 
               <ProductItem key={product.id} product={product} onBuy={handlePurchase} />
            )}
        </div>
      )}
    </>
  );
};
