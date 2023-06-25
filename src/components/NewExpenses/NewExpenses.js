import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpenses = ( props ) => {
    const [displayForm, setDisplayForm ] = useState( false );
    const saveExpenseDataHandler = ( data ) => {
        const expenseData = {
            ...data,
            id: Math.random.toString()
        }
        props.onAddExpense( expenseData )
    }
    
    const cancelForm = ( bool ) => {
        setDisplayForm( bool );
    }

    const showForm = () => {
        setDisplayForm( true )
    }

    return (
        <div className="new-expense">
            { displayForm ? (<ExpenseForm onSaveExpenseData = { saveExpenseDataHandler } showForm={ cancelForm }/>): (<button onClick={ showForm }>Add New Expenses</button>) }
        </div>    
    )
}


export default NewExpenses;