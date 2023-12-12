import React, { useState } from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { error_toast, success_toast } from '../services';
import { post_data, post_login } from '../fetch';
import { TextField } from '@mui/material';

const AddProduct = () => {
  const [data, setData] = useState({
    "name": "",
    "category": "",
    "price": "",
    "description": "",
    "manufacturer": "",
    "availableItems": "",
    "imageUrl": ""
  })

  const addProduct = async () => {
    if(data.name.trim().length===0 || data.category.trim().length===0 || 
    data.price.trim().length===0 || data.description.trim().length===0 || 
    data.manufacturer.trim().length===0 || 
    data.availableItems.trim().length===0 ||
    data.imageUrl.trim().length===0
    ){
      error_toast('Fill all the details');
      return;
    }
    await post_login('/products/addproduct',data)
    .then((res)=>{
        success_toast(res.data.message)
    }).catch((e)=>{
      error_toast('something went wrong')
    })


  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }
  return (
    <div>
      <form className='registerForm'>
        <h3 style={{ marginTop: '5px' }}>Add Product</h3>
        <TextField  name='name' label="Name" variant="outlined" onChange={(e) => { handleChange(e) }} />
        <TextField  name='category' variant='outlined' label='Category' onChange={(e) => { handleChange(e) }} />
        <TextField  name='manufacturer' variant='outlined' label='manufacturer' onChange={(e) => { handleChange(e) }} />
        <TextField  name='price' variant='outlined' label='Price' onChange={(e) => { handleChange(e) }} />
        <TextField  name='availableItems' variant='outlined' label='availableItems' onChange={(e) => { handleChange(e) }} />
        <TextField  name='imageUrl' variant='outlined' label='Image Url' onChange={(e) => { handleChange(e) }} />
        <TextField  name='description' variant='outlined' label='description' onChange={(e) => { handleChange(e) }} />
        <button type='button' onClick={addProduct} className='loginBtn'>Save Product</button>
      </form>
    </div>
  )
}

export default AddProduct