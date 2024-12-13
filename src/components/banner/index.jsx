import React, { useEffect } from "react";
import PropTypes from "prop-types"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Component = ({ img }) => {
    const style = {
        backgroundImage: `url(${img})`
    }
    const options = {
        loop: true,
        margin: 10,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000,
        items: 1, // Tampilkan satu item dalam satu waktu
    };
   
    return (
        <>
            <section className="banner set-bg" style={style}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7 col-lg-8 m-auto">
                            <OwlCarousel className="banner__slider" {...options}>
                                <div className="banner__item">
                                    <div className="banner__text">
                                        <span>The Chloe Collection</span>
                                        <h1>The Project Jacket</h1>
                                        <a href="#">Shop now</a>
                                    </div>
                                </div>
                                <div className="banner__item">
                                    <div className="banner__text">
                                        <span>The Chloe Collection</span>
                                        <h1>The Project Jacket</h1>
                                        <a href="#">Shop now</a>
                                    </div>
                                </div>
                            </OwlCarousel>
                            {/* <div className="banner__slider owl-carousel">
                                <div className="banner__item">
                                    <div className="banner__text">
                                        <span>The Chloe Collection</span>
                                        <h1>The Project Jacket</h1>
                                        <a href="#">Shop now</a>
                                    </div>
                                </div>
                                <div className="banner__item">
                                    <div className="banner__text">
                                        <span>The Chloe Collection</span>
                                        <h1>The Project Jacket</h1>
                                        <a href="#">Shop now</a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
Component.propTypes = {
    img: PropTypes.string.isRequired
}
export default Component