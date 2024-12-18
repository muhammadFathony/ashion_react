import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"

const Component = ({slug, img, title, price, status, category}) => {
    const styleProduct = {
        backgroundImage: `url(${img})`
    }
    return (
        <>
            <div className={`col-lg-3 col-md-4 col-sm-6 mix ${category} `}>
                <div className="product__item">
                    <div className="product__item__pic" style={styleProduct}>
                        {
                            status === 'stockout' ? (
                                <div className="label stockout">out of stock</div>
                            ) : status === 'new' ? (
                                <div className="label new">New</div>
                            ) : ''
                        }
                        <ul className="product__hover">
                            <li><a href="img/product/product-1.jpg" className="image-popup"><span className="arrow_expand"></span></a></li>
                            <li><a href="#"><span className="icon_heart_alt"></span></a></li>
                            <li><NavLink to={`detail/${slug}`}><span className="icon_bag_alt"></span></NavLink></li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6><a href="#">{title}</a></h6>
                        <div className="rating">
                            <i className="fa fa-star p-1"></i>
                            <i className="fa fa-star p-1"></i>
                            <i className="fa fa-star p-1"></i>
                            <i className="fa fa-star p-1"></i>
                            <i className="fa fa-star p-1"></i>
                        </div>
                        <div className="product__price">{price}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
Component.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired
}
export default Component