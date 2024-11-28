import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";
import ForgotPassword from "./pages/ForgotPassword/index";

function AppRoutes() {
   return(
    <BrowserRouter>
        <Routes> 
            <Route path="/" element={<Home/>}></Route>
            <Route path="/registrar" element={<CreateAccount/>}></Route>
            <Route path="/esqueciSenha" element={<ForgotPassword/>}></Route>
        </Routes>
    </BrowserRouter>
   ) 
}

export default AppRoutes;