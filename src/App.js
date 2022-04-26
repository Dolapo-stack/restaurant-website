import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router,
        Routes,
        Route
        } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='products' element={<Products />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Routes>

      </Router>
      
    </div>
  );
}

export default App;
