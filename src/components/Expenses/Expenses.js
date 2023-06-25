import "./Expenses.css";
import ExpenseItem from "./ExpenseItems";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";

const Expenses = ( prop ) => {
    const expenses = prop.expense;
    const [year, setYear] = useState('*')

    const filtered = () => {
        let filteredExpenses = expenses.filter(expense => {
            return expense.date.getFullYear().toString() === year
        })
        if (year == '*') {
            filteredExpenses = expenses;
        }
        return filteredExpenses
    }
    

    const addFilter = ( returnVal ) => {
        setYear(returnVal);
    }

    let renderedContent = <p className="text-white-centered">No Expense Found</p>  
    if (filtered().length > 0 ) {
        renderedContent = filtered().map( x => <ExpenseItem key= { x.id } expensesData= { x }/> )
    }        
      
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter year= { year } onAddFilter = { addFilter }/>
            </Card>
            <Card className="expenses">
            { renderedContent }
            </Card>

        </div>
    )
}

export default Expenses;