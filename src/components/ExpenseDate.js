import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props2){
    const month=props2.date.toLocaleString("en-US",{month:"long"});
    const year=props2.date.toLocaleString("en-US",{year: "numeric"});
    const day=props2.date.toLocaleString("en-US",{day: "2-digit"});

    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
        </div>
    );
}
export default ExpenseDate;