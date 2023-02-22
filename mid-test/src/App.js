import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/registrasion"
import Beranda from "./pages/beranda";
import Product from "./pages/productList";
import DetailProduct from "./pages/productDetail";

class App extends Component{
  render(){
    return(
      <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/product" element={<Product />} />
          <Route path="/detail" element={<DetailProduct />} />
          {/* <Route path="/data" element={<Data />} /> */}
        </Routes>
      </div>
    );
  }
}

export default App;
