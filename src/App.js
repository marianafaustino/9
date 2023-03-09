import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <h1>Seção 9 - Context API</h1>
      <BrowserRouter>
      <Navbar/>
      <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Products/>}/>
      <Route path="/about" element={<About/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
