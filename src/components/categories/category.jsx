import PropTypes from "prop-types"

const Component = ({img, title , subtitle, big}) => {
    const styleCategories = {
        backgroundImage: `url(${img})`
    }
    return (
        <>
            <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                <div className={`categories__item  set-bg ${big ? 'categories__large__item' : ''}`} style={styleCategories}>
                    <div className="categories__text">
                        {big ? <h1>{title}</h1> : <h4>{title}</h4> }
                        <p>{subtitle}</p>
                        <a href="#">Shop now</a>
                    </div>
                </div>
            </div>
        </>
    )
}
Component.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    big: PropTypes.bool.isRequired
}
export default Component