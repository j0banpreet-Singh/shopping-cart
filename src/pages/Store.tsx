import StoreItem from "../data/items.json"
import {Row,Col} from "react-bootstrap"
import StoreItems from "../components/StoreItems.tsx"

export default function Store() {

    return (
        <>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={3} className="g-4">
            {
                StoreItem.map(item=>(
                    <Col key={item.id}>
                    <StoreItems  {...item}/>
                    </Col>
                ))
            }
        </Row>
        </>
    )
}