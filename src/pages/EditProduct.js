import React, { useEffect, useState } from 'react'
import { error_toast, success_toast } from '../services';
import { get_login, put_login } from '../fetch';
import { TextField } from '@mui/material';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    "name": "",
    "category": "",
    "price": "",
    "description": "",
    "manufacturer": "",
    "availableItems": "",
    "imageUrl": ""
  })

  const editProduct = async () => {
    if (data.name.trim().length === 0 || data.category.trim().length === 0 ||
      data.price.trim().length === 0 || data.description.trim().length === 0 ||
      data.manufacturer.trim().length === 0 ||
      data.imageUrl.trim().length === 0
    ) {
      error_toast('Fill all the details');
      return;
    }
    await put_login('/products/' + id, data)
      .then((res) => {
        success_toast('Updated successfully')
        navigator('/products')
      }).catch((e) => {
        error_toast('something went wrong')
      })


  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }
  const getProductData = async () => {
    await get_login('/products/' + id)
      .then((res) => {
        let a = res.data;
        setData({ ...data, name: a.name, category: a.category, price: a.price, manufacturer: a.manufacturer,
           description: a.description, availableItems: a.availableItems, imageUrl: a.imageUrl })
      }).catch((e) => {
        error_toast(e.response.data.message)
      })
  }
  useEffect(() => {
    getProductData();
  }, [id])
  return (
    <div>
      <form className='registerForm'>
        <h3 style={{ marginTop: '5px' }}>Modify Product</h3>
        <TextField name='name' label="Name" variant="outlined" value={data.name} onChange={(e) => { handleChange(e) }} />
        <TextField name='category' variant='outlined' label='Category' value={data.category} onChange={(e) => { handleChange(e) }} />
        <TextField name='manufacturer' variant='outlined' label='manufacturer' value={data.manufacturer} onChange={(e) => { handleChange(e) }} />
        <TextField name='price' variant='outlined' label='Price' value={data.price} onChange={(e) => { handleChange(e) }} />
        <TextField name='availableItems' variant='outlined' label='availableItems' value={data.availableItems} onChange={(e) => { handleChange(e) }} />
        <TextField name='imageUrl' variant='outlined' label='Image Url' value={data.imageUrl} onChange={(e) => { handleChange(e) }} />
        <TextField name='description' variant='outlined' label='description' value={data.description} onChange={(e) => { handleChange(e) }} />
        <button type='button' onClick={editProduct} className='loginBtn'>Modify Product</button>
      </form>
    </div>
  )
}

export default EditProduct