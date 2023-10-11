import { useShoppingCart } from "../Context/ShopinCartContext"

import StoreItems from '../Data/items.json'
import { CurrencyFormatter } from "../Utilities/CurrencyFormater"


type cartItemProps ={
    id: number
    quantity: number
}

const CartItems = ({id, quantity}: cartItemProps) => {


    const item = StoreItems.find(i => i.id === id);
 const {removeFromCart }= useShoppingCart();
 if(item == null) return null;
  return (
    <div className="border-grey-light flex mt-1 p-r-l align-center">
        <img src={item.image} alt="" className="small-img" />
        <div className="quantity flex">
            <div className="flex-col gap mr-auto p-r-l">
                <div className="gap nameqty flex">
                <span>{item.name } </span>  
                {
                    quantity > 1 &&  <span> x{quantity}</span>
                }
               
                    
                    </div>
                    <span>{<CurrencyFormatter number={item.price} /> }</span>
            </div>
            <div className="close-sec gap flexing ml-sm ">
                <span>{<CurrencyFormatter number={item.price * quantity} /> }</span>
                <span className="flexing closebtnsm  bg-white border-grey pointer" onClick={()=>removeFromCart(item.id)}>&times;</span>
            </div>
        </div>
    </div>
  )
}

export default CartItems