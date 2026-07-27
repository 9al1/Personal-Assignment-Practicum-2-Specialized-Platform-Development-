import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";

import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route 
                    path="/" 
                    element={<Home />} 
                />


                <Route 
                    path="/products" 
                    element={<ProductList />} 
                />


                <Route 
                    path="/products/:id" 
                    element={<ProductDetails />} 
                />


                <Route
                    path="/login"
                    element={<Login />}
                />


                <Route
                    path="/register"
                    element={<Register />}
                />


            </Routes>

            <Footer />

        </BrowserRouter>

    );

}


export default App;