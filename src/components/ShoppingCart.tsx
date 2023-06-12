import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from "../data/items.json"
import CartItem from './CartItem'
import { formatCurrency } from '../utilities/formatCurrency'

type ShoppingCartProps = {
  isOpen: boolean
}

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const { cartItems, closeCart } = useShoppingCart()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack>
          {
            cartItems.map(item => (
              <CartItem key={item.id} {...item} />
            ))
          }
          <div className='ms-auto fw-bold '>
            TOTAL{" "}{
             formatCurrency( cartItems.reduce((total,current)=>{
                const item = storeItems.find(item=>item.id === current.id)
                return current.quantity * (item?.price || 0) + total
              },0))
            }
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart
