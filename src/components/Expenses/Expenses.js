import "./Expenses.css";
import ExpenseItem from "./ExpenseItems";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";

const Expenses = ( prop ) => {
    const expenses = prop.expense;
    const [year, setYear] = useState('*')

    const filter = () => {
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
      
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter year= { year } onAddFilter = { addFilter }/>
            </Card>
            <Card className="expenses">
            {}
            { filter().map( x => <ExpenseItem key= { x.id } expensesData= { x }/> ) }            
            </Card>

        </div>
    )
}

export default Expenses;