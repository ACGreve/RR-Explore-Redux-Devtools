import Counter from './Counter'
import Todo from './Todo'
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
      <br/>
      <h1>Todo List</h1>
      <Todo />
    </div>
  );
}

export default App;
