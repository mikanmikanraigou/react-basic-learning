import "./ExpenseDate.css";

const ExpenseDate = (prop) => {
    const data = prop.date;
    const month = data.toLocaleString('en-US', {month: 'long'});
    const day = data.toLocaleString('en-US', {day: '2-digit'});
    const year = data.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}

export default ExpenseDate;