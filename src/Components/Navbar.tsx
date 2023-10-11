import { useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { useShoppingCart } from '../Context/ShopinCartContext';

const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
  useEffect(() => {
    console.log("Cart Quantity in Navbar:", cartQuantity);
  }, [cartQuantity]);


  const handleCartClick = () => {
    console.log(cartQuantity);
  };
  
  return (
    <div className='boxShadow paddingtb sticky'>
    <div className='container p-r-l flexing  justify-between items-center'>
      <div className="nav-links fz-1">
        <NavLink to="/" className="listing mr-1"> Home</NavLink>
        <NavLink to="/about" className="listing mr-1"> About</NavLink>
        <NavLink to="/shop" className="listing mr-1"> Shop</NavLink>
      </div>

      {
        cartQuantity > 0 && (<div className="cart flexing fz-1" onClick={openCart}>
        
        C <span className='cart-num fz-sm flexing round'>{cartQuantity}</span>
    </div> )
      }
      
    
      
    </div>
    </div>
    
  )
}

export default Navbar;
