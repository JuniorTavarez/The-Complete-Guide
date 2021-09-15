import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses({ date, title, amount }) {
  return (
    <div>
      {console.log('second Expenses')}
      <ExpenseItem title={title} amount={amount} date={date} />
    </div>
  );
}

export default Expenses;
