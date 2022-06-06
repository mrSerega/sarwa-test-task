import {
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import { Accounts } from "./pages";


function App() {
  return (
    <Routes>
      <Route path='/accounts' element={<Accounts/>} />
    </Routes>
  )
}

  

export default App;
