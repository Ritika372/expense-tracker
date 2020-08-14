import React ,{useState ,useContext} from 'react';
import {GlobalContext}  from '../Context/GlobalState';

function AddTransaction(){
   const [text , setText] = useState(""); 
   const [amount , setAmount] = useState(0);
   const {AddTransaction} = useContext(GlobalContext);
   function onsubmit(event){
       event.preventDefault();
       const newtran = {
           id : Math.floor(Math.random()*100000),
           text,
           amount : parseInt(amount)
       }

       AddTransaction(newtran);
       setText("");
       setAmount(0);
   }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit = {onsubmit}>
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