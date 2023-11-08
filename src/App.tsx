import React from 'react';
import ProductsList from "./components/ProductsList";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductCard from "./components/ProductCard";

const App = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/products" element={<ProductsList/>}/>
                <Route path="/product/:id" element={<ProductCard/>}/>
            </Routes>
        </>
    );
};

export default App;
