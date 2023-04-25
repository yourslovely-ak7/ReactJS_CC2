import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Head from './Components/Head';
import Hobby from './Components/Hobby';
import Home from './Components/Home';
import {BrowserRouter, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Head/>}>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/hobby' element={<Hobby/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;