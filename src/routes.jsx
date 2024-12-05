import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import MenuPrincipal from "./pages/MenuPrincipal";
import Profile from "./pages/Profile";

function AppRoutes() {
   return(
    <BrowserRouter>
        <Routes> 
            <Route path="/" element={<Home/>}></Route>
            <Route path="/registrar" element={<CreateAccount/>}></Route>
            <Route path="/menuprincipal" element={<MenuPrincipal/>}></Route>
            <Route path="/perfil" element={<Profile/>}></Route>
        </Routes>
    </BrowserRouter>
   ) 
}

export default AppRoutes;