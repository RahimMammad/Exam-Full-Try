import React from 'react'
import "./App.scss"
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Add from './pages/Add'
import Basket from './pages/Basket'
import Wishlist from './pages/Wishlist'
import Detail from './pages/Detail'
import { HelmetProvider } from "react-helmet-async"
import WishlistProvider from './context/WishlistContext'
import BasketProvider from './context/BasketContext'

const App = () => {
  const helmetContext = {}
  return (
    <>
    <HelmetProvider context={helmetContext}>
      <WishlistProvider>
        <BasketProvider>
          <Routes>
            <Route path='/' element={<MainLayout/>}>
              <Route index element={<Home />}/>
              <Route path='/add' element={<Add />}/>
              <Route path='/basket' element={<Basket />}/>
              <Route path='/wishlist' element={<Wishlist />}/>
              <Route path='/:id' element={<Detail />}/>
            </Route>
          </Routes>
        </BasketProvider>
      </WishlistProvider>
    </HelmetProvider>
    </>
  )
}

export default App