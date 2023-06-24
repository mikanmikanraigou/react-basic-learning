import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = ( props ) => {
//  const[ year, setYear] = useState('2023')

  const setYear = ( events ) => {
    props.onAddFilter( events.target.value );
    // setYear( events.target.value );
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={ props.year } onChange={ setYear }>
          <option value='*'>ALL</option>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2019'>2018</option>
          <option value='2019'>2017</option>
          <option value='2019'>2016</option>
          <option value='2019'>2015</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;