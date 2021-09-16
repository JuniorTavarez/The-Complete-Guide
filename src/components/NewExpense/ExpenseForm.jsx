import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [entertedTitle, setEnteredTitle] = useState('');
  const [entertedAmount, setEnteredAmount] = useState('');
  const [entertedDate, setEnteredDate] = useState('');
  const titleChangeHandler = e => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = e => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = e => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    const expenseData = {
      title: entertedTitle,
      amount: entertedAmount,

      date: new Date(entertedDate + 'T00:00:00'),
    };

    onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={entertedTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={entertedAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={entertedDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'> Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
