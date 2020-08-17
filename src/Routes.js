import React from 'react';
import {Home} from './Components/Home';
import {Item} from './Components/Item';
import {About} from './Components/About';
import {ProductIndex} from './Components/ProductIndex';
import {Products} from './Components/Products';
import {AppNavbar} from "./Components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export const RouterConfig = () => {
    return(
        <Router>
            <AppNavbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route  path="/about" element={<About/>} />
                <Route exact path="/products" element={<Products/>}>
                    <Route path="/" element={<ProductIndex/>}/>
                    <Route path=":slug" element={<Item/>}/>
                </Route>
                <Route path="*" element={<h1>Not Found</h1>}  />
            </Routes>
        </Router>
    )
}
