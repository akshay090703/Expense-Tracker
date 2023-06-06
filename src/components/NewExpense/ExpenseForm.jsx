import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const [showForm, setShowForm] = useState(false);

  const clickHandler = (event) => {
    const { name, value, type } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: type === "date" ? new Date(value) : value,
      };
    });
  };

  const handleCancelBtn = (event) => {
    event.preventDefault();
    resetForm();

    setShowForm(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData(formData);

    resetForm();
    setShowForm(false);
  };

  function resetForm() {
    setFormData({
      title: "",
      amount: "",
      date: "",
    });
  }

  function showFormInput() {
    setShowForm(true);
  }

  if (!showForm) {
    return <button onClick={showFormInput}>Add Expense</button>;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title || ""}
            id="title"
            onChange={clickHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={formData.amount || ""}
            onChange={clickHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2019-01-01"
            max="2021-12-31"
            onChange={clickHandler}
            value={
              formData.date instanceof Date
                ? formData.date.toISOString().split("T")[0]
                : ""
            }
            required
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={handleCancelBtn}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
