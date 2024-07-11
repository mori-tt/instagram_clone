import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store";
import { increment, decrement } from "./features/counter/counterSlice";
import "./App.css";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </header>
    </div>
  );
}

export default App;
