import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Signup from './Signup'
import Home from './home/Home'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'
import ProductDetails from './ProductDetails'
import AddAddress from './addAddress/AddAddress'

const AllRoute = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/products' element={<Home />} />
                <Route path='/addproduct' element={<AddProduct />} />
                <Route path='/editproduct/:id' element={<EditProduct />} />
                <Route path='/product/:id' element={<ProductDetails />} />
                <Route path='/addaddress/:id/:qty' element={<AddAddress />} />
                {/* <Route path='/payment' element={<PrivateRoute> <Payment /></PrivateRoute>} />
                <Route path='/success' element={<PrivateRoute> <PaymetSuccess /></PrivateRoute>} />
                <Route path="/product/:id" element={<PrivateRoute> <ProductDetails /></PrivateRoute>} />
                <Route path='/admin/addProd' element={<AdminRoute> <AddNewProd /></AdminRoute>} />
                <Route path='/admin/editProd/:id' element={<AdminRoute> <EditProduct /></AdminRoute>} />
                <Route path='/admin/purchaseList' element={<AdminRoute> <PurchaseList /></AdminRoute>} /> */}
                {/* <Route path='*' element={<ErrorPage />} /> */}
            </Routes>
        </div>
    )
}

export default AllRoute
