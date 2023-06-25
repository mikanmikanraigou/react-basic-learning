import "./NewExpenses.css";


import ExpenseForm from "./ExpenseForm";
const NewExpenses = ( props ) => {
    const saveExpenseDataHandler = ( data ) => {
        const expenseData = {
            ...data,
            id: Math.random.toString()
        }
        props.onAddExpense( expenseData )
    }
    
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData = { saveExpenseDataHandler } />
        </div>    
    )
}

export default NewExpenses;