import './App.css';
import { Header } from './components/Header';
import { Login } from './components/Login';
// import { Footer} from './components/Footer'
import { Main } from './components/Main';
import { Routes, Route } from 'react-router-dom';
import { Register } from './components/Register';
import { authContext } from './contexts/authcontext';
import { useState } from 'react';
import { useLocalStorage } from './hooks/loginhook';


function App() {
  const [authenticate, setauthenticate] = useLocalStorage('auth',{})
  
  const loginfunc = (data)=>{
    setauthenticate(data)
  }


  
  return (
    <div className="App">
      <authContext.Provider value={{loginfunc, user:authenticate}}>
      
      <Header/>
      
      
        <Routes>

          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Main/>}/>
          <Route path="/register" element={<Register/>}/>

        </Routes>

      </authContext.Provider>
    
    </div>
  );
}

export default App;
