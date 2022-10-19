
import './App.css';
import HomePage from './components/pages/HomePage/HomePage';
import  { BrowserRouter, Routes, Route } from "react-router-dom"
import Pricing from './components/pages/Pricing';
import Blog from './components/pages/Blog/Blog';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/blog' element={<Blog/>}/>
      </Routes>
      

    </BrowserRouter>
  );
}

export default App;
