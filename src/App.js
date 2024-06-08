import React, {useState, createContext} from "react";
import "./App.css";
import Navbar from "./components/navbar.js";
import Home from "./components/home.js";
import Explore from "./components/explore.js";
import Cart from "./components/cart.js";
import Favourite from "./components/favourite.js";
import Account from "./components/account.js";
import Product from "./components/product.js";
import PageNotFound from "./components/notfound.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const MyContext = createContext(null);

function App() {
  let [cart, setCart] = useState([])
  let [favourite, setFavourite] = useState([])

  return (
    <div className="container">
      <MyContext.Provider value={{cart, setCart, favourite, setFavourite}}>
        <BrowserRouter>
          <div className="nav-section">
            <Navbar />
          </div>
          <div className="main-section">
            <div className="shop-section">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/explore" element={<Explore />}></Route>
                <Route path="/cart" element={<Cart />}></Route>
                <Route path="/favourite" element={<Favourite />}></Route>
                <Route path="/account" element={<Account />}></Route>
                <Route path="/product" element={<Product />}></Route>
                <Route path="*" element={<PageNotFound />}></Route>
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
