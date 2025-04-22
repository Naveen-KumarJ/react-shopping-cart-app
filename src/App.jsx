import React, { useState } from 'react'
import HeaderSection from './sections/HeaderSection'
import CartSection from './sections/CartSection'

function App() {
  const [productDetails, setProductDetails] = useState([
    {
      id:101,
      name:"Samsung Galaxy S8",
      price:"₹ 45990.00",
      image:"https://rukminim2.flixcart.com/image/128/128/j1nvwcw0/mobile/q/w/v/samsung-galaxy-s8-plus-sm-g955f-original-imaet6mkffszygpy.jpeg?q=70&crop=false",
      quantity:1
    },
    {
      id:102,
      name:"Google Pixel",
      price:"₹ 65000.00",
      image:"https://rukminim2.flixcart.com/image/128/128/xif0q/mobile/g/x/9/-original-imaggsudg5fufyte.jpeg?q=70&crop=false",
      quantity:1
    },
    {
      id:103,
      name:"Xiaomi Redmi Note 2",
      price:"₹ 48900.00",
      image:"https://rukminim2.flixcart.com/image/128/128/xif0q/mobile-display/u/x/v/5-5-above-y2-ssp-telecom-original-imah87gzqmhgumzy.jpeg?q=70&crop=false",
      quantity:1
    },
    {
      id:104,
      name:"Samsung Galaxy S7",
      price:"₹ 38990.00",
      image:"https://www.cio.com/wp-content/uploads/2023/05/galaxy-s8-primary-100718693-orig-2.jpg?quality=50&strip=all",
      quantity:1
    }
  ]);

  return (
    <main className='container mx-auto max-w-7xl'>
      <HeaderSection productDetails={productDetails} />
      <CartSection productDetails={productDetails} setProductDetails={setProductDetails} />
    </main>
  )
}

export default App