
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Blog from './mat/Blog';
import Contact from './mat/Contact';
import Portfolo from './mat/Portfolo';
import Home from './mat/Home';
import Resume from './mat/Resume';
import Layout from './Layout';
import {im}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="portfolo" element={<Portfolo />} />
        <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
