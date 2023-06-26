import "./Chart.css";

const ChartBar = ( props ) => {
    let bar = '0%'
    if (props.maxValue > 0) {
        bar = Math.round((props.value / props.maxValue) * 100) + '%';
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: bar}}></div>
            </div>
            <div className="chart-bar__label">
                { props.label }
            </div>
        </div>
    )
}

const Chart = ( props ) => {
    const dataPointValues = props.dataPoints.map( dataPoint => dataPoint.value ); 
    const maximumValue = Math.max(...dataPointValues)

    return (
        <div className="chart">
            { props.dataPoints.map( dataPoint => <ChartBar key={ dataPoint.label } value={ dataPoint.value } maxValue={ maximumValue } label={ dataPoint.label }/>)}
        </div>
    )
}

const ExpensesChart = ( props ) => {
    const chartDataPoints = [
        { label: 'Jan', value: 0},
        { label: 'Feb', value: 0},
        { label: 'Mar', value: 0},
        { label: 'May', value: 0},
        { label: 'Jun', value: 0},
        { label: 'Aug', value: 0},
        { label: 'Sep', value: 0},
        { label: 'Oct', value: 0},
        { label: 'Des', value: 0},
    ]

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); //Starting from index array 0 is january
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return (<Chart dataPoints={ chartDataPoints }/>)
}

export default ExpensesChart;
