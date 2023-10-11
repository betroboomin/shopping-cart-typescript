import {useContext,ReactNode,createContext, useState} from 'react'
import { ShoppingCart } from '../Components/ShoppingCart'

type ShoppingCartContext = {
    getItemQuantity: (id:number) => number
    increaseItemQuantity: (id:number) => void
    decreaseItemQuantity: (id:number) => void
    removeFromCart: (id:number) => void
    openCart : () => void
    closeCart : () => void
    cartQuantity: number
    cartItems: CartItem[]
}
type ShoppingCartProviderProps ={
    children: ReactNode
}
type CartItem = {
    id: number
    quantity: number
}
const ShoppingCartContext = createContext({} as ShoppingCartContext)

export const useShoppingCart = () => {
 return  useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const [isClose, setIsClose] = useState(false)

    function getItemQuantity(id: number){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }
    const openCart = () =>  setIsOpen(true);
    const closeCart = () =>  setIsOpen(false);



    
    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
         0
      );
      
      
    function decreaseItemQuantity (id: number){
        
        setCartItems(currenItems => {
            if(currenItems.find(items => items.id === id)?.quantity === 1){
                return currenItems.filter(item => item.id !== id)
            } else{
                return(currenItems.map((item)=> {
                    if(item.id === id ){
                        return {...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                }))
            }
        })
    }
    function increaseItemQuantity (id: number){
       
        setCartItems(currenItems => {
            if(currenItems.find(items => items.id === id) == null){
                return [...currenItems, {id, quantity:1}]
            } else{
                return(currenItems.map((item)=> {
                    if(item.id === id ){
                        return {...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                }))
            }
        })
    }
    function removeFromCart (id: number){
        setCartItems(thisItem => {
             return thisItem.filter(items => items.id !== id)
        })
    }
    // Your component logic goes here
    return (
        <ShoppingCartContext.Provider value={{

            getItemQuantity, 
            increaseItemQuantity, 
            decreaseItemQuantity,
            removeFromCart, 
            openCart,
            closeCart, 
            cartQuantity,
            cartItems,
            
        }}>
        {children}
        <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    );
  }