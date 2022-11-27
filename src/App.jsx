import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Check from "./components/Check";
import { CartProvider } from "react-use-cart"
import Contacto from "./components/Contacto";
import Checkout from "./components/Checkout";
import Error404 from "./components/Error404";

function App() {
  return (
    <>
      <Menu />
        <CartProvider>
          <Routes>
            <Route exact path="/" element={<Header />} />
            <Route exact path="/productos" element={<Producto/>} />
            <Route exact path="/check" element={<Check />} />
            <Route exact path="/contacto" element={<Contacto/>} />
            <Route exact path="/checkout" element={<Checkout/>} />
            <Route path="*" exact={true} element={<Error404/>}/>
          </Routes>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
