// import useFetch from './hooks/useFetch';
import { Hero, Navbar, SignIn, SignUp } from './components/index.ts';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // const [todo, setTodo] = useState([]);
  // useEffect(() => {
  //   fetch('/books')
  //     .then(res => res.json())
  //     .then(data => setTodo(data));
  // }, []);
  // console.log(todo);

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/signup' element={<SignUp />} />
          {/* <Route exact path='/books' element={<Books />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
