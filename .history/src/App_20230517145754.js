import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Blog from './mat/Blog';
import Contact from './mat/Contact';
import Portfolo from './mat/Portfolo';
import Chu from './mat/Chu';
import Resume from './mat/Resume';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
        <Route path="/home1" element={<Chu />}>
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
