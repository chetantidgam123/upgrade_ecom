import React, { useEffect, useState } from 'react'
import { get_login, logData } from '../../fetch'
import { useNavigate } from 'react-router-dom';
import { error_toast } from '../../services';

const Home = () => {
const loggdata = logData();
const navigate = useNavigate();
const [products,setProducts] = useState([])

const getProducts = async()=>{
  await get_login('/products')
  .then((res) => {
    setProducts(res.data)
  }).catch((e) => {
    error_toast(e.response.data.message)
  })
}

useEffect(()=>{
  if(!loggdata){
    navigate('/login')
  }else{
    getProducts();
  }
},[])
  return (
    <div>Home</div>
  )
}

export default Home