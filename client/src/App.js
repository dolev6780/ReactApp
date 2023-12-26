import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import NavBar from './compnents/NavBar';
import react, { useState } from 'react';
function App() {
  const [username, setUsername] = useState("");
  return (
    <div className="App">
      <Router>
        <NavBar username={username}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signin' element={<SignIn setUser={setUsername}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
