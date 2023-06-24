import "./ExpenseItem.css";
import "../UI/Card.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (prop) => {
    const expensesData = prop.expensesData;
    const [ title, setTitle ] = useState(expensesData.title);

    // const clickHandler = () => {
    //     if (title === expensesData.title) {
    //         setTitle('New Title');
    //     }else{
    //         setTitle(expensesData.title);
    //     }
    // }
    return (
        <Card className="expense-item">
            <ExpenseDate date={expensesData.date}/>
            <div className="expense-item__description">
                <h2>{expensesData.title}</h2>
                <div className="expense-item__price">$ {expensesData.amount}</div>
            </div>
            {/* <button onClick={clickHandler}> Change Title </button> */}
        </Card>
        )
}

export default ExpenseItem;