import './App.css';
import './utilities.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Authentication from './pages/Authentication';
import Landing from './pages/Landing';
import Following from './pages/Following';
import Followers from './pages/Followers';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Authentication />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
          <Route path='/following' element={<Following />}></Route>
          <Route path='/followers' element={<Followers />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
