import logo from './logo.svg';
import './App.css';
import Head1 from './Head/Head1';
import Hero from './Landing/Hero';
import Landing from './Landing/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
     
      <Routes>
       {/* <Route path='/' element={<Head/>}></Route> */}
        <Route path='/' element={<Hero/>}></Route>
        {/* <Route path='/' element={<Head1/>}></Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
