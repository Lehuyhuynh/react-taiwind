import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Blog from './mat/Blog';
import Contact from './mat/Contact';
import Portfolo from './mat/Portfolo';
import Home from './mat/Home';
import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={< />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
