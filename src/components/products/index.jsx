import Item from "./item"
import PropTypes from "prop-types"

const Component = ({products}) => {
    return (
        <>
            <div className="row">
                <div className="col-lg-4 col-md-4">
                    <div className="section-title">
                        <h4>New product</h4>
                    </div>
                </div>
                <div className="col-lg-8 col-md-8">
                    <ul className="filter__controls">
                        <li className="active" data-filter="*">All</li>
                        <li data-filter=".women">Women’s</li>
                        <li data-filter=".men">Men’s</li>
                        <li data-filter=".kid">Kid’s</li>
                        <li data-filter=".accessories">Accessories</li>
                        <li data-filter=".cosmetic">Cosmetics</li>
                    </ul>
                </div>
            </div>
            <div className="row property__gallery">
                {
                    products.length > 0 ? products.map((value, key) => (
                        <Item img={value.img} title={value.title} price={value.price} status={value.status} category={value.category} key={key}  />
                    )) :
                    'Empty'
                }
            </div>
        </>
    )
}
Component.propTypes = {
    products: PropTypes.array.isRequired
}
export default Component