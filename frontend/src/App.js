import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Login from './components/login'
import Main from './components/main'
import Display from './components/display';
import Register from './components/register';
import User from './components/user'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route path='/Main' element={<Main/>}/>
        <Route path='/Display' element={<Display/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/User' element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
