import React, {useState} from "react";
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props0){
    const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props0.item.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  };
  
    return(
        <div>
        <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {expensesContent};
        {/* <ExpenseItem title={props0.item[0].title} amount={props0.item[0].amount} date={props0.item[0].date}></ExpenseItem>
        <ExpenseItem title={props0.item[1].title} amount={props0.item[1].amount} date={props0.item[1].date}></ExpenseItem>
        <ExpenseItem title={props0.item[2].title} amount={props0.item[2].amount} date={props0.item[2].date}></ExpenseItem>
        <ExpenseItem title={props0.item[3].title} amount={props0.item[3].amount} date={props0.item[3].date}></ExpenseItem> */}
        </Card>
        </div>
    )
}
export default Expenses;