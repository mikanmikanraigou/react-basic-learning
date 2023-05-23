import "./Expenses.css";
import ExpenseItem from "./ExpenseItems";
import Card from "../UI/Card";

const Expenses = (prop) => {
    return (
        <Card className="expenses">
            <ExpenseItem expensesData={prop.expense[0]}/>
            <ExpenseItem expensesData={prop.expense[1]}/>
            <ExpenseItem expensesData={prop.expense[2]}/>
            <ExpenseItem expensesData={prop.expense[3]}/>
        </Card>
    )
}

export default Expenses