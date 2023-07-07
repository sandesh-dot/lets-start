import React from "react";
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function Expenses(props0){
    return(
        <Card className="expenses">
        <ExpenseItem title={props0.item[0].title} amount={props0.item[0].amount} date={props0.item[0].date}></ExpenseItem>
        <ExpenseItem title={props0.item[1].title} amount={props0.item[1].amount} date={props0.item[1].date}></ExpenseItem>
        <ExpenseItem title={props0.item[2].title} amount={props0.item[2].amount} date={props0.item[2].date}></ExpenseItem>
        <ExpenseItem title={props0.item[3].title} amount={props0.item[3].amount} date={props0.item[3].date}></ExpenseItem>
        </Card>
    )
}
export default Expenses;