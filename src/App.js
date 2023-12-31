import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const Defaultdata=[
  {id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14)},
  {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2018, 2, 12)},
  {id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 28)},
  {id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12)},
  {id: 'e5', title: 'New Desk (Steel)', amount: 900, date: new Date(2020, 10, 14)}];

function App() {
  const [expense,setExpense] = useState(Defaultdata);

  const addExpenseHandler = (expenses) => {
    setExpense((prevExpenses)=>{
      return [expenses,...prevExpenses];
    });
  };

  return (
   <div>
    <h2>Mark Your Daily Expense..</h2>
    <NewExpense  onAddExpense={addExpenseHandler}/>
    <Expenses item={expense} />
    
   </div>
  );
}

export default App;
