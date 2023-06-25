import "./Chart.css";

const chartBar = ( props ) => {
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

const chart = ( props ) => {
    return (
        <div className="chart">
            { props.dataPoints.map( dataPoint => <chartBar key={ dataPoint.label } value={ dataPoint.value } maxValue={ null } label={ dataPoint.label }/>)}
        </div>
    )
}



export default chart