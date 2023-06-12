import { Card, Button } from "react-bootstrap"
import { formatCurrency } from "../utilities/formatCurrency"
import { useShoppingCart } from "../context/ShoppingCartContext"
type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

export default function StoreItems({ id, name, price, imgUrl }: StoreItemProps) {
    const { getItemQuantity, cartItems, increaseCartQuantity, removeFromCart,decreaseCartQuantity } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return (
        <>
            <Card className="h-100">
                <Card.Img
                    variant="top"
                    src={imgUrl}
                    style={{
                        objectFit: "cover",
                        height: "300px"
                    }}
                />
                <Card.Body className="d-flex flex-column">
                    <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                        <span className="fs-2">{name}</span>
                        <span className="ms-2 text-muted">{formatCurrency(price)}</span>
                    </Card.Title>
                    <div>
                        {
                            quantity === 0 ?
                                (<Button
                                    className="w-100"
                                    variant="outline-dark"
                                    onClick={() => increaseCartQuantity(id)}
                                >
                                    + add to cart
                                </Button>) : (
                                    <div className="d-flex flex-column align-items-center gap-3">
                                        <div className="d-flex align-items-center gap-2">
                                            <Button
                                                variant="dark"
                                                onClick={()=>decreaseCartQuantity(id)}
                                            >
                                                -
                                            </Button>
                                            <span>{quantity} in cart</span>
                                            <Button
                                                variant="dark"
                                                onClick={()=>increaseCartQuantity(id)}
                                            >
                                                +
                                            </Button>
                                        </div>
                                        <Button
                                            className=""
                                            variant="outline-danger"
                                            onClick={() => removeFromCart(id)}
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                )
                        }
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}