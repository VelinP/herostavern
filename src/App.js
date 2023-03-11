import './App.css';
import { Header } from './components/Header';
import { Login } from './components/Login';
// import { Footer} from './components/Footer'
import { Main } from './components/Main';
import { Routes, Route } from 'react-router-dom';
import { Register } from './components/Register';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Routes>

        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="/register" element={<Register/>}/>

      </Routes>
          
    
    </div>
  );
}

export default App;
