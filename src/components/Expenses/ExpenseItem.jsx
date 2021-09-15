import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = ({ date, title, amount }) => {
  const [current, setting] = useState(title);
  const test = () => {
    return setting('you clicked me');
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{current}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={test}>Click</button>
    </Card>
  );
};

export default ExpenseItem;
