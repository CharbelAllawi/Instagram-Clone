import './App.css';
import './utilities.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/LoginPage/LoginPage';
import Register from './pages/RegisterPage/RegisterPage';
import Landing from './pages/Landing';
import Following from './pages/Following';
import Followers from './pages/Followers';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
          <Route path='/following' element={<Following />}></Route>
          <Route path='/followers' element={<Followers />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
