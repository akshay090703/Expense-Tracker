import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const handleFilterYear = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenseArray = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onFilterYear={handleFilterYear}
        />
        <ExpensesChart expenses={filteredExpenseArray} />
        <ExpensesList data={filteredExpenseArray} />
      </Card>
    </div>
  );
}
