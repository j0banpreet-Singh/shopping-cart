import StoreItems from "../data/items.json"
import { Button, Stack } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"

type CartItemProps = {
    id: number
    quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {
    const{removeFromCart} = useShoppingCart()
    const item = StoreItems.find(item => item.id === id)
    if (item == null) return null
    return (
        <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
            <img
                src={item?.imgUrl}
                style={{ width: "125px", height: "75px", objectFit: "cover" }}
            />
            <div className="me-auto">
                <div>
                    {item?.name}{" "}
                    {quantity > 1 && (
                        <span className="text-muted" style={{ fontSize: ".65rem" }}>
                            x{quantity}
                        </span>
                    )}
                </div>
                <div className="text-muted">
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>{formatCurrency(quantity * item.price)}</div>
            <Button
            variant="outline-danger"
            size="sm"
            onClick={()=>removeFromCart(id)}
            >
                &times;
            </Button>
        </Stack>
    )
}

export default CartItem
