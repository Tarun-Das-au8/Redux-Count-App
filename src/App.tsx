import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import {actionCreators, State} from './state/index';


function App() {

  const dispatch = useDispatch();
  const { incrementCount, decrementCount, resetCount } = bindActionCreators(actionCreators, dispatch);
  const value = useSelector((state: State) => state.countReducer)

  return (
    <div className="App">
      <h1>{value}</h1>
      <button onClick={() => dispatch(incrementCount)}>Increment</button>
      <button onClick={() => dispatch(decrementCount)}>Decrement</button>
      <button onClick={() => dispatch(resetCount)}>Reset</button>
    </div>
  );
}

export default App;
