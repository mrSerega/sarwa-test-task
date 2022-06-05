import {
  Route,
  Routes,
} from "react-router-dom";

import './App.css';
import { Layout, Menu } from "./components";
import { Projects } from "./pages";


function App() {
  return (
    <Menu>
      <Layout>
        <Routes>
          <Route path='/projects' element={<Projects/>} />
        </Routes>
      </Layout>
    </Menu>
  )
}

  

export default App;
