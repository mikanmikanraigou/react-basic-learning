import "./Expenses.css";
import ExpenseItem from "./ExpenseItems";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import { useState } from "react";


//Expenses is the list of all expenses rendered
const Expenses = ( prop ) => {
    const expenses = prop.expense;
    const [year, setYear] = useState('*')

    //return filtered data based on selected year
    const filtered = () => {
        //filter data
        let filteredExpenses = expenses.filter(expense => { return expense.date.getFullYear().toString() === year; })
        if (year === '*') {
            filteredExpenses = expenses;
        }
        return filteredExpenses
    }
    
    const setFilteredYear = ( returnVal ) => {
        setYear(returnVal);
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter year= { year } onAddFilter = { setFilteredYear }/>
            </Card>
            <Card className="expenses">
            <ExpensesList data={ filtered() }/>
            </Card>
        </div>
    )
}

const ExpensesList = ( props ) => {
    //=========renderedContent==========//
    if (props.data.length === 0 ) {
        return <h2 className="expenses-list__fallback"> Found no expenses </h2>
    }        
    return (
        <ul className="expenses-list">
            { props.data.map( x => <ExpenseItem key= { x.id } expensesData= { x }/> ) }
        </ul>
    
    )
    //=========renderedContent==========//
}

export default Expenses;