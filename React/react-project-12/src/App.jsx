import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment, inscrementByAmount } from './features/counter/CounterSlice';
import { useState } from 'react';

function App() {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecerementClick(){
    dispatch(decrement());
  }

  function handleIncByAmt(){
    dispatch(inscrementByAmount(amount));
  }

  return (
    <>
      <div className='container'>
        <button onClick={handleIncrementClick}> + </button>
        <p>Count : {count}</p>
        <button onClick={handleDecerementClick}> - </button>
        <br />
        <br />
        <input type="number" onChange={(e) => setAmount(e.target.value)} value={amount} />
        <button onClick={handleIncByAmt}> Inc Amount </button>
      </div>

    </>
  )
}

export default App
