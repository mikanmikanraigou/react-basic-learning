import "./ExpenseItem.css";
import "../UI/Card.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

//Expenses item is indiviaual item that will be put in list in Expenses.js
const ExpenseItem = (prop) => {
    const expensesData = prop.expensesData;
    return (
    <li>
        <Card className="expense-item">
            <ExpenseDate date={expensesData.date}/>
            <div className="expense-item__description">
                <h2>{expensesData.title}</h2>
                <div className="expense-item__price">$ {expensesData.amount}</div>
            </div>
        </Card>
    </li>
    )
}

export default ExpenseItem;