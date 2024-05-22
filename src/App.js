import React from 'react';
import './App.css';
import NevigationBar from './pages/navigation-bar/nevigation-bar.pages';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home/home.pages";
import Music from './pages/music/music.pages';
import Shop from './pages/shop/shop.pages';
import Slashie from './pages/slashie/slashie.pages';
import Contact from './pages/contact/contact.pages';
import Scorepage from './pages/shop/shop-inner.page/shop-inner.page';
import SHOP from './data/SHOP.json';
import Checkout from './pages/checkout/checkout.page';


function App() {
  return (
    <Routes>
      <Route path='/' element={ <NevigationBar /> }>
        <Route index element={<Home />} />
        <Route path='/music' element={<Music />} />
        <Route path='/slashie' element={<Slashie />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/shop/:id' element={<Scorepage data={SHOP}/>} />
        <Route path='/checkout' element={<Checkout/>} />
      </Route>
    </Routes>
  );
}

export default App;


