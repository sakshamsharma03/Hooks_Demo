import React, { useState, useEffect, useContext, useReducer, useRef } from 'react';
import './App.css';
import Login from './components/login/login.jsx';
import Logout from './components/logout.jsx';
import Register from './components/register/register.jsx'
import {BrowserRouter as Router,Routes,Route,Link,useNavigate} from "react-router-dom"

// Context
const ThemeContext = React.createContext();

// Reducer
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

// Component
const  App=()=> {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  const inputRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);
  
  const navigate=useNavigate();
  const user=localStorage.getItem("loggedin");
  console.log(user);
  useEffect(()=>
  {
    if(!user){navigate("/login")}
  },[user, navigate]);

  // useEffect with cleanup
  useEffect(() => {
    document.title = `You clicked ${count} times`;

    return () => {
      document.title = 'React App';
    };
  }, [count]);

  // useEffect without cleanup
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.outerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // useContext
  const theme = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Logout/>
      <h1>React Hooks Demo</h1>
      <p>useState: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <h2>useReducer:</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>

      <h2>useRef:</h2>
      <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>

      <h2>useEffect:</h2>
      <p>Window width: {width}</p>

      <h2>useContext:</h2>
      <p>Theme: {theme}</p>
    </div>
  );
}

// App context provider
const  AppWithTheme=()=> {
 
  return (
    <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register />} />
      
        
        
      
    </Routes>
  </Router>
  
     
  );
}

export default AppWithTheme;
