import PropTypes from "prop-types"
import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination, Autoplay, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const Component = ({ sliders }) => {
    const swiperConfig = {
        loop: true,
        speed: 600,
        autoplay: {
            delay: 5000,
        },
        slidesPerView: 'auto',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        modules: [Autoplay, Pagination]
    };
    return (
        <>
            <section className="banner2">
                <Swiper className="slider" {...swiperConfig}>
                    {sliders.length > 0 ? sliders.map((value, index) => (
                        <SwiperSlide key={index}>
                            <div className="banner2-item" style={{backgroundImage: `url(${value.img})`}}></div>
                        </SwiperSlide>
                    )) : ''}
                    <div className="swiper-pagination"></div>
                </Swiper>
            </section>
        </>
    )
}
Component.propTypes = {
    sliders: PropTypes.array.isRequired
}
export default Component