
import StoreItems from '../Components/StoreItems'
import storeItems from '../Data/items.json'

const Shop = () => {
  return (
    <div className="container store">
      {
        storeItems.map((item)=>(
          <StoreItems {...item} />
        ))
      }
      
      
    </div>
  )
}

export default Shop