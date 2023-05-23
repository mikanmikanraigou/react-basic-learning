// import ExpenseItem from "./components/ExpenseItems";
import Expenses from "./components/Expenses/Expenses"
import NewExpenses from "./components/NewExpenses/NewExpenses";

function App() {
  const expenses = [
    {title: 'Car Insurance', amount: 297.44, date: new Date(2021, 2, 25)},
    {title: 'Loan', amount: 120.00, date: new Date(2021, 3, 4)},
    {title: 'Mortage', amount: 300.00, date: new Date(2021, 5, 25)},
    {title: 'Electric Bill', amount: 60.00, date: new Date(2021, 4, 14)},
  ]
    return (
      <div>
        <NewExpenses/>
        <Expenses expense={expenses}/>
      </div>
    );
  }
  
  export default App;
  