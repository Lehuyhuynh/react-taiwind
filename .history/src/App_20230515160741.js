import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Blog from './mat/Blog';
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
