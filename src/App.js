import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import './app.css'
import {Route,Routes} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
function App() {
  return ( 
  <>
    <Topbar/>
    <div className="container">
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/users" element={<UserList/>}/>
      <Route path="/user/:userId" element={<User/>}/>
      <Route path="/newUser" element={<NewUser/>}/>
      <Route path="/products" element={<ProductList/>}/>
      <Route path="/product/:productId" element={<Product/>}/>
    </Routes>
  
    </div>
   
  </>
  );
}

export default App
