import { useState } from "react"
import { useShoppingCart } from "../Context/ShopinCartContext"
import CartItems from "./CartItems"
import { CurrencyFormatter } from "../Utilities/CurrencyFormater"
import StoreItems from '../Data/items.json'


type ShoppingCartProps ={
    isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps){
   const {closeCart, cartItems} = useShoppingCart()
const [isClicked, setIsClicked] = useState(false);

const handleclick = ()=> {
    setIsClicked(!isClicked);
}
    return  (
    <div className={ `bg-big ${ isOpen ? 'overlay' : '' }`} onClick={handleclick}>
        <div className={`shoppingCart ${isOpen ? 'slidein': ''} `} >
   <div className="shoppincart-header">
    <span className="Cart-title">Shopping cart</span>
    <span className="closebtn flexing round pointer " onClick={closeCart}>&times;</span>
   </div>
   {cartItems.map((item,i)=>
  ( <div key={i}>
  <CartItems {...item}/>
  </div>)
   )}
   <div className="total">
    <span className="total-text">Total </span> {<CurrencyFormatter number={cartItems.reduce((total, currCartItem) => {
    const item = StoreItems.find(i => i.id === currCartItem.id);
        return total + (item?.price || 0) * currCartItem.quantity
    }, 0)} />}
   </div>
        </div>
    </div>
    )

    
}