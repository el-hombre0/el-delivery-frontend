import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Registration,
  Login,
  Orders,
  Main,
  Header,
  Footer,
  CompletedOrder,
  Account,
  MyOrders,
  UsersList,
} from "./components";
import { EditOrder } from "./components/Orders/EditOrder";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="register" element={<Registration />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="orders" element={<Orders />}></Route>
        <Route path="orders/:id" element={<CompletedOrder />}></Route>
        <Route path="myorders" element={<MyOrders />}></Route>
        <Route path="account" element={<Account />}></Route>
        <Route path="users-list" element={<UsersList />}></Route>
        <Route path="edit-order/:id" element={<EditOrder />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
