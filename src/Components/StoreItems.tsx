import React from 'react'
import { CurrencyFormatter } from '../Utilities/CurrencyFormater'
import { useShoppingCart } from '../Context/ShopinCartContext';

type storeItemsProps = {
    id: number,
    image: string,
    name: string,
    price:number
}


const StoreItems = (props: storeItemsProps) => {
    const {increaseItemQuantity, removeFromCart,getItemQuantity, decreaseItemQuantity} = useShoppingCart();
    
    const {id, image, name, price} = props
    const quantity = getItemQuantity(id);
  return (
    <div className="shopbox bg-light" key={id}>
        <img src={image} alt='' className='image' />
        <div className='book'>
          <span>{name}</span>
          <span>{<CurrencyFormatter number={price} /> }</span>
        </div>
        {
            quantity === 0 ? (<span className='btn-big pointer flexing paddingtb' onClick={()=> increaseItemQuantity(id)}>
            + add to cart
        </span>) : (
        <>
            <div className='count-sec flexing'>
          <span className='arith flexing pointer' onClick={()=> decreaseItemQuantity(id)}>-</span>
          <span>{quantity} in cart</span>
          <span className='arith flexing pointer' onClick={()=> increaseItemQuantity(id)}>+</span>
        </div>
        <div className='flexing'>
        <button className='btn-out pointer' onClick={()=>removeFromCart(id)}>remove</button>
      
        </div>
            </>
        )
        }
        
        
        </div>
  )
}

export default StoreItems