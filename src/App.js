import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import './app.css'
import {Route,Routes} from "react-router-dom";
import UserList from "./pages/userList/UserList";
function App() {
  return ( 
  <>
    <Topbar/>
    <div className="container">
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/user" element={<UserList/>}/>
    </Routes>
  
    </div>
   
  </>
  );
}

export default App
