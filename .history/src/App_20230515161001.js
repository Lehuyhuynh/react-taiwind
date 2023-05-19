import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Blog from './mat/Blog';
import Contact from './mat/Contact';
import Portfolo from './mat/Portfolo';
import Home from './mat/Home';
import Resume from './mat/Resume';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolo" element={<Portfolo />} />
        <Route path="Resume" element={<Blogs />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
