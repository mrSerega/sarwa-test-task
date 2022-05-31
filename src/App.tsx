import {
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import { Projects } from "./pages";


function App() {
  return <Routes>
    <Route path='/projects' element={<Projects/>} />
  </Routes>
}

  

export default App;
