import './App.css';
import Home from "./components/Home/Home"
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
