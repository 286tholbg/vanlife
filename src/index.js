
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';

// Pages
import Home from "./pages/Home"
import About from "./pages/About"

// Vans
import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'

// Host
import HostLayout from './components/HostLayout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HostVans from './pages/Host/HostVans'
import HostVanDetail from './pages/Host/HostVanDetail';

// Vans Details
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanPricing from './pages/Host/HostVanPricing';

import "./server"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='vans' element={<Vans />}/>
          <Route path='vans/:id' element={<VanDetail />}/>

          {/* Host Layout */}
          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />}/>
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVans />} />

          {/* HostVanDetailsLayout Id Layout*/}
          <Route path='vans/:id' element={<HostVanDetail />}>
            <Route index element={<HostVanInfo />}/>
            <Route path='pricing' element={<HostVanPricing />}/>
            <Route path='photos' element={<HostVanPhotos />}/>
          </Route>


          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
