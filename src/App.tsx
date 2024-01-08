import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Registration,
  Authorization,
  Orders,
  Main,
  Header,
  Footer,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="reg" element={<Registration />}></Route>
        <Route path="auth" element={<Authorization />}></Route>
        <Route path="orders" element={<Orders />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
