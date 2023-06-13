import "./Expenses.css";
import ExpenseItem from "./ExpenseItems";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = ( prop ) => {
    const addFilter = ( data ) => {
        prop.onAddFilter( data );
    }


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onAddFilter = { addFilter }/>
            </Card>
            <Card className="expenses">
                <ExpenseItem expensesData={prop.expense[0]}/>
                <ExpenseItem expensesData={prop.expense[1]}/>
                <ExpenseItem expensesData={prop.expense[2]}/>
                <ExpenseItem expensesData={prop.expense[3]}/>
            </Card>

        </div>
        
    )
}

export default Expenses