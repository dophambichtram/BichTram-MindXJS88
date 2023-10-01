import { useState } from 'react';
import NewExpense from './component/NewExpense/NewExpense';
import Expenses from './component/Expenses/Expenses';

const dummyExpenses = [

];

const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  console.log(expenses)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
