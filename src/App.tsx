import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Registration,
  Orders,
  Main,
  Header,
  Footer,
  CompletedOrder,
  Profile,
} from "./components";
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
        <Route path="orders/:id" element={<CompletedOrder />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
