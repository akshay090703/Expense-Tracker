import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  const expensesLists = props.data.map((expense) => {
    return (
      <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={expense.id}
      />
    );
  });

  if (props.data.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found!</h2>;
  }

  return <ul className="expenses-list">{expensesLists}</ul>;
};

export default ExpensesList;
