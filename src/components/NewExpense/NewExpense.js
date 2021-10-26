import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense= (props) =>
{
    const saveExpenseHandler= (enteredExpenseData) =>
    {
        const expenseData= {
            id:Math.random().toString(),
            ...enteredExpenseData
        }
        props.onAddExpense(expenseData);   
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseHandler}/>
        </div>
    );
}

export default NewExpense;