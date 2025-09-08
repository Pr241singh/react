import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./App.module.css";
import FoodItems from "./component/FoodItems";
import ErrorMessage from "./component/ErrorMessages";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";
import { useState } from "react";
//import Item from "./component/item";

function App() {
  //let foodItems = ["Dal", "vegetables", "Roti", "Salad", "Milk"];
  /*let textStateArr = useState("Food items entered by user");
  let textToShow = textStateArr[0];
  let setTextState = textStateArr[1];*/

  //let [textToShow, setTextState] = useState("Food items entered by user");
  let [foodItems, setFoodItems] = useState([]);

  //console.log(`Current value of textState:${textToShow}`);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
      console.log("Food value enter is : " + newFoodItem);
    }
    //console.log(event);
    //setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className={styles.heading}>Healthy Food</h1>
        <hr></hr>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
