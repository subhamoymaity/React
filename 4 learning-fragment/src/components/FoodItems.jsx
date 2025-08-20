import { useState } from "react";
import Item from "./Item";

const FoodItems = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);      //FoodItems will repaint but app will not
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)} //bought = true
          handleBuyButton={(event) => onBuyButton(item, event)}   //wrapper method or anonymous function
        ></Item>
      ))}
    </ul>
  );
};Ṅ

export default FoodItems;