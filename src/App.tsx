import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Registration, Orders, Main, Header, Footer, FullOrder, Profile } from "./components";
import LoginForm from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="register" element={<Registration />}></Route>
        <Route path="login" element={<LoginForm />}></Route>
        <Route path="orders" element={<Orders />}></Route>
        <Route path="orders/:id" element={<FullOrder />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
