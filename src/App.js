import './App.css';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { Main } from './components/Main';
import { Routes, Route } from 'react-router-dom';
import { Register } from './components/Register';
import { authContext } from './contexts/authcontext';
import { useLocalStorage } from './hooks/loginhook';
import { Logout } from './components/Logout';
import { About } from './components/About';
import { Create } from './components/Create';
import { AllQuests } from './components/AllQuests';
import { Details } from './components/Details';
import { Footer } from './components/Footer';
import { Delete } from './components/Delete';

function App() {
  const [authenticate, setauthenticate] = useLocalStorage('auth',{})
  
  const loginfunc = (data)=>{
    setauthenticate(data)
  }

  const logoutfunc = ()=>{
    setauthenticate({})
  }

  
  return (
    <div className="App">
      <authContext.Provider value={{loginfunc,logoutfunc, user:authenticate}}>
      
      <Header/>
      
      
        <Routes>

          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Main/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="logout" element={<Logout/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/catalog" element={<AllQuests/>}/>
          <Route path="/catalog/:questId" element={<Details/>}/>
          <Route path="/catalog/:questId/delete" element={<Delete/>}/>

        </Routes>

      </authContext.Provider>

      <Footer/>

    </div>
  );
}

export default App;
