import { useState } from "react";
import Item from "./item";

const FoodItems = ({ items }) => {
  //let foodItems = ["Dal", "vegetables", "Roti", "Salad", "Milk"];
  let [activeItems, setActiveItems] = useState([]);
  let onBuyButton = (item, event) => {
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul class="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}
        ></Item>
      ))}
    </ul>
  );
};

//foodItem(item)
export default FoodItems;
