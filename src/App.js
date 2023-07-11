// import ExpenseItem from "./components/ExpenseItems";
import { useState } from "react";
import Expenses from "./components/Expenses/Expenses"
import NewExpenses from "./components/NewExpenses/NewExpenses";

const dummyData = [
  {id:'e1',title: 'Car Insurance', amount: 297.44, date: new Date(2021, 2, 25)},
  {id:'e2',title: 'Loan', amount: 120.00, date: new Date(2021, 3, 4)},
  {id:'e3',title: 'Mortage', amount: 300.00, date: new Date(2021, 5, 25)},
  {id:'e4',title: 'Electric Bill', amount: 60.00, date: new Date(2021, 4, 14)},
]

function App() {
  const [expenses, setExpenses] = useState(dummyData)

  const addExpenseHandler = ( expensesData ) => {
    //if dependent to previous state value instead using this below
    //setExpenses([expensesData, ...expenses])
    //USE THIS INSTEAD
    setExpenses(( prevState ) => {
      window.returnVal = prevState;
      return [expensesData, ...prevState]
    })
  }
    return (
      <div>
        <NewExpenses onAddExpense = { addExpenseHandler }/>
        <Expenses expense={ expenses }/>
      </div>
    );
  }
  
  export default App;
  