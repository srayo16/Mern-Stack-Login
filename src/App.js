import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Notfound from './Components/Notfound/Notfound';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>
    </>
  );
}

export default App;
