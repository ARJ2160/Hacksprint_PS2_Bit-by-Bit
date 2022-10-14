import { useEffect, useState } from "react";
// import useFetch from './hooks/useFetch';

function App() {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);
  console.log(todo);

  return (
    <div className="App">
      euuuuuuuuuuuuuuuuuuuuu
    </div>
  );
}

export default App;
