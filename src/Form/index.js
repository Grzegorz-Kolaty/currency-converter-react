import { useState } from "react";
import "./style.css";

const Form = () => {
  const [amount, setAmount] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    //if (amount !== "") 
  };

  return (
    <form>
      <input />
      <button>Calculate!</button>
    </form> 
)


  /*return (
    <form className="form">
      <label className="form__labelText">
        <input
          className="amount--style"
          name="form"
          type="number"
          min="1"
          step="any"
          placeholder="1"
          required />
      </label>
      <label className="form__labelText">
        <select
          className="currencyIn--style"
          type="select"
          required>
          <option value="1.00" selected>PLN</option>
          <option value="4.82">EUR</option>
          <option value="4.96">USD</option>
        </select>
      </label>
      <label className="form__labelExchange">
        <select
          className="currencyOut--style"
          type="select"
          required>
          <option value="1.00">PLN</option>
          <option value="4.82" selected>EUR</option>
          <option value="4.96">USD</option>
        </select>
      </label>
    </form >
  )*/

}; 

  
export default Form;