import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Registration,
  Authentication,
  Orders,
  Main,
  Header,
  Footer,
  Account,
  UsersList,
  Features,
  Faqs,
  Pricing,
  About,
  EditOrder,
  CompletedOrder,
  MyOrders
} from "./components";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="register" element={<Registration />}></Route>
        <Route path="login" element={<Authentication />}></Route>
        <Route path="orders" element={<Orders />}></Route>
        <Route path="orders/:id" element={<CompletedOrder />}></Route>
        <Route path="myorders" element={<MyOrders />}></Route>
        <Route path="account" element={<Account />}></Route>
        <Route path="users-list" element={<UsersList />}></Route>
        <Route path="edit-order/:id" element={<EditOrder />}></Route>
        <Route path="features" element={<Features />}></Route>
        <Route path="faqs" element={<Faqs />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
