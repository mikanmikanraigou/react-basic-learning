import "./ExpenseItem.css";
import "../UI/Card.css";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


const ExpenseItem = (prop) => {
    const expensesData = prop.expensesData;
    return (
        <Card className="expense-item">
            <ExpenseDate date={expensesData.date}/>
            <div className="expense-item__description">
                <h2>{expensesData.title}</h2>
                <div className="expense-item__price">$ {expensesData.amount}</div>
            </div>
        </Card>
        )
}

export default ExpenseItem;