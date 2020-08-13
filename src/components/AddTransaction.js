import React ,{useState} from 'react';

function AddTransaction(){
   const [text , setText] = useState(""); 
   const [amount , setAmount] = useState(0);

    return (
        <div>
            <h3>Add new transaction</h3>
            <form>
            <div className="form-control">
              <label htmlfor="text">Text</label>
              <input type="text" value = {text} onChange = {(event) => {setText(event.target.value)}}
               placeholder="Enter text..." />
            </div>
            <div className="form-control">
              <label htmlfor="amount">Amount <br />
              (negative - expense, positive - income)</label>
              <input type="number"  value = {amount} onChange = {(event) => {setAmount(event.target.value)}} 
               placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
            </form>
        </div>
    );
}

export default AddTransaction;