import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddSegment from './component/dropdown'
import Cusmodal from './component/cusmodal'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Cusmodal />}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
