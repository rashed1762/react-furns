import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navcomp from './Navbar/Navcomp';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Dining from './Pages/Dining';
import Living from './Pages/Living';
import Bed from './Pages/Bed';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navcomp></Navcomp>
    </div>
    <Routes>
      <Route path="/" element={<Home></Home>}>
      </Route>
      <Route path="/about" element={<About></About>} >
      </Route>
      <Route path="/dining" element={<Dining></Dining>}></Route>
      <Route path="/Living" element={<Living></Living>}></Route>
      <Route path="/bed" element={<Bed></Bed>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
