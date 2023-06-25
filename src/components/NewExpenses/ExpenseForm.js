import { useState } from "react";
import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseForm.css"

const ExpenseForm = ( props ) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     setTitle: '',
    //     setAmount: '',
    //     setDate: '',
    // })

    const titleChangeHandler = ( event ) => {
        setTitle(event.target.value);
        // setUserInput({
        //     ...userInput, 
        //     setTitle: event.target.value
        // })

        // setUserInput(( prevState )=> {
        //     return {...prevState, setTitle: event.target.value};
        // })
    };
    const amountChangeHandler = ( event ) => {
        setAmount(event.target.value);
        // setUserInput({
        //     ...userInput, 
        //     setAmount: event.target.value
        // })

        // setUserInput(( prevState )=> {
        //     return {...prevState, setAmount: event.target.value};
        // })
    };
    const dateChangeHandler = ( event ) => {
        setDate(event.target.value);
        // setUserInput({
        //     ...userInput, 
        //     setDate: event.target.value
        // })

        // setUserInput(( prevState )=> {
        //     return {...prevState, setDate: event.target.value};
        // })
    };

    const submitHandler = ( event ) => {
        event.preventDefault();
        const expenseData = {
            title : title,
            amount : amount,
            date : new Date(date),
        }
        props.onSaveExpenseData( expenseData );
        setTitle('');
        setAmount('');
        setDate('');
    }

    return (
        <form onSubmit={ submitHandler }>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={ titleChangeHandler } value = { title }></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={ amountChangeHandler } value = { amount }></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min='2010-01-01' max='2100-12-31' onChange={ dateChangeHandler } value = { date }></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Cancel New Expenses </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm