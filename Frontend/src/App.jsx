/* eslint-disable react/prop-types */
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";
import CSigningIn from './Pages/CSigningIn'
import CSigningUp from './Pages/CSigningUp'
import ASigningIn from './Pages/ASigningIn'
import ASigningUp from './Pages/ASigningUp'
import AboutPage from "./Pages/Aboutus";
import CommunitySharing from './Pages/ComunitySharing'
import DeliveryOptimization from './Pages/DeliveryOptimisation'
import MarketPlace from './Pages/Marketplace'
import ServiceOverview from './Pages/ServiceOverview'
import Admin from './Pages/Admin'
import Login from './Pages/login'
import InventoryManagement from "./Pages/InventoryManagement";
import OrderManagement from './Pages/OrderManagement'
import PaymentManagement from './Pages/PaymentManagement'
import ProductManagement from './Pages/ProductManagement'

// Protected route wrapper component
const ProtectedRoute = ({ children }) => {
  return (
    <>
      <SignedIn>
        {children}
      </SignedIn>
      <SignedOut>
        <Navigate to="/" replace />
      </SignedOut>
    </>
  );
};

export default function App() {
  return (
    <BrowserRouter> 
      <Routes>
        {/* Public routes - no authentication needed */}
        <Route index path='/' element={<Login/>}/>
        <Route path='/Clogin' element={<CSigningIn/>}/>
        <Route path='/CSignup' element={<CSigningUp/>}/>
        <Route path='/Alogin' element={<ASigningIn/>}/>
        <Route path='/ASignup' element={<ASigningUp/>}/>

        {/* Protected routes - need authentication */}
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }/>
        <Route path='/aboutus' element={
          <ProtectedRoute>
            <AboutPage/>
          </ProtectedRoute>
        }/>
        <Route path='/deliveryoptimization' element={
          <ProtectedRoute>
            <DeliveryOptimization />
          </ProtectedRoute>
        }/>
        <Route path='/communitysharing' element={
          <ProtectedRoute>
            <CommunitySharing />
          </ProtectedRoute>
        }/>
        <Route path='/marketplace' element={
          <ProtectedRoute>
            <MarketPlace />
          </ProtectedRoute>
        }/>
        <Route path='/serviceoverview' element={
          <ProtectedRoute>
            <ServiceOverview />
          </ProtectedRoute>
        }/>
        <Route path='/admin' element={
          <ProtectedRoute>
            <Admin/>
          </ProtectedRoute>
        }/>
        <Route path='/inventory' element={
          <ProtectedRoute>
            <InventoryManagement/>
          </ProtectedRoute>
        }/>
        <Route path='/order' element={
          <ProtectedRoute>
            <OrderManagement/>
          </ProtectedRoute>
        }/>
        <Route path='/payment' element={
          <ProtectedRoute>
            <PaymentManagement/>
          </ProtectedRoute>
        }/>
        <Route path='/product' element={
          <ProtectedRoute>
            <ProductManagement/>
          </ProtectedRoute>
        }/>
      </Routes>
      </BrowserRouter>
  );
}