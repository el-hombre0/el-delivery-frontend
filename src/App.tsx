import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Registration,
  // LoginForm,
  Orders,
  Main,
  Header,
  Footer,
} from "./components";
import LoginForm from "./components/LoginForm";
import { FormEvent, useState } from "react";
// import { request } from "./services/axios_helper";

function App() {
  // const [compToShow, setCompToShow] = useState("unauth");
  // const login = () => {
  //   setCompToShow("login");
  // };
  // const logout = () => {
  //   setCompToShow("unauth");
  // };

  // const onLogin = (e: FormEvent, username: string, password: string) => {
  //   e.preventDefault();
  //   request("POST", "/login", { login: username, password: password })
  //   .then((response) => {
  //     setCompToShow("orders")
  //   }).catch((error)=>{setCompToShow("unauth")});
  // };
  // const onRegister = (e: FormEvent, firstName:string, lastName:string, username: string, password: string) => {
  //   e.preventDefault();
  //   request("POST", "/register", { firstName:firstName, lastname:lastName, login: username, password: password })
  //   .then((response) => {
  //     setCompToShow("orders")
  //   }).catch((error)=>{setCompToShow("unauth")});
  // };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        {/* {compToShow === "unauth"} && <Route path="register" element={<Registration />}></Route>
        {compToShow === "login"} && <Route path="login" element={<LoginForm onLogin={onLogin} onRegister={onRegister} />}></Route>
        {compToShow === "orders"} && <Route path="orders" element={<Orders />}></Route> */}
        <Route path="register" element={<Registration />}></Route>
        <Route path="login" element={<LoginForm onLogin={true} onRegister={true} />}></Route>
        <Route path="orders" element={<Orders />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
