import {
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import { Layout } from "./components";
import { Projects } from "./pages";


function App() {
  return <Layout>
    <Routes>
      <Route path='/projects' element={<Projects/>} />
    </Routes>
  </Layout>
}

  

export default App;
