import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";


const ExpenseItem = (prop) => {
    const expensesData = prop.expensesData;
    return (
        <div className="expense-item">
            <ExpenseDate date={expensesData.date}/>
            <div className="expense-item__description">
                <h2>{expensesData.title}</h2>
                <div className="expense-item__price">$ {expensesData.amount}</div>
            </div>
        </div>
        )
}

export default ExpenseItem;