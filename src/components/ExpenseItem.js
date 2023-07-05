import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props1) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props1.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props1.title}</h2>
        <div className="expense-item__price">{props1.amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;