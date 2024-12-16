import PropTypes from "prop-types"
const Component = ({img, title, price}) => {
    const style = {
        objectFit: 'cover',
        objectPosition: top
    }
    return (
        <>
            <div className="trend__item">
                <div className="trend__item__pic">
                    <img style={style} width={120} height={120} src={img} alt="product.jpg" />
                </div>
                <div className="trend__item__text">
                    <h6>{title}</h6>
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
        </>
    )
}
Component.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price : PropTypes.string.isRequired
}
export default Component