
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import  { BrowserRouter, Routes, Route } from "react-router-dom"
import Pricing from './components/pages/Pricing';
import Blog from './components/pages/Blog/Blog';
import About from './components/pages/About';
import Signup from './components/pages/Signup'


function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Sign' element={<Signup/>}/>
      </Routes>
      

    </BrowserRouter>
  );
}

export default App;
