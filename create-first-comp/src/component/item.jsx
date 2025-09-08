import styles from "./item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  //const handleBuyButtonClicked = (foodItem) => {
  //console.log(`${foodItem} being bought`);
  //let { foodItem } = props;
  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
