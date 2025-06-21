import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Home from "./page/Home";
import ProductDetail from "./page/ProductDetail";
import CartPage from "./page/CartPage";
import Payment from "./page/Payment";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
