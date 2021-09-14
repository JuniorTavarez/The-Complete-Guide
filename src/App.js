import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem date='October' title='Rents' amount='800' />
      <ExpenseItem date='November' title='Car Insurace' amount='40' />
      <ExpenseItem date='Feb' title='Medical' amount='160' />
    </div>
  );
}

export default App;
