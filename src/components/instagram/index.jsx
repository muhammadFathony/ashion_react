import insta1 from "../../assets/img/instagram/insta-1.jpg";

const Component = () => {
    const style = {
        backgroundImage: `url(${insta1})`    
    }
    return (
        <>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div className="instagram__item" style={style}>
                    <div className="instagram__text">
                        <i className="fa fa-instagram"></i>
                        <a href="#">@ ashion_shop</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Component