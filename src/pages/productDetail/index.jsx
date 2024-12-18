import { lazy, Suspense, useRef, useEffect } from "react"
import { NavLink } from "react-router-dom"

import product1 from "../../assets/img/product/product-1.jpg"
import product2 from "../../assets/img/product/product-2.jpg"
import product3 from "../../assets/img/product/product-3.jpg"
import product4 from "../../assets/img/product/product-4.jpg"
import detail1 from "../../assets/img/product/details/thumb-1.jpg"
import detail2 from "../../assets/img/product/details/thumb-2.jpg"
import detail3 from "../../assets/img/product/details/thumb-3.jpg"
import detail4 from "../../assets/img/product/details/thumb-4.jpg"
import productDetail1 from "../../assets/img/product/details/product-1.jpg"
import productDetail2 from "../../assets/img/product/details/product-2.jpg"
import productDetail3 from "../../assets/img/product/details/product-3.jpg"
import productDetail4 from "../../assets/img/product/details/product-4.jpg"

const products = [
    {
        title: "Bag",
        img: product1,
        price: "$ 59.0",
        status: "new",
        category: "men",
        slug: 'bad-123'
    },
    {
        title: "Bag",
        img: product2,
        price: "$ 59.0",
        status: "stockout",
        category: "women",
        slug: 'bad-124'
    },
    {
        title: "Bag",
        img: product3,
        price: "$ 59.0",
        status: "stockout",
        category: "women",
        slug: 'bad-125'
    },
    {
        title: "Bag",
        img: product4,
        price: "$ 59.0",
        status: "stockout",
        category: "men",
        slug: 'bad-126'
    }
]

const Product = lazy(() => import("../../components/products/item"))
const Instagram = lazy(() => import("../../components/instagram"))

const Component = () => {
    return (
        <>
            <section className="product-details spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product__details__pic">
                                <div className="product__details__pic__left product__thumb nice-scroll">
                                    <a className="pt active" href="#product-1">
                                        <img src={detail1} alt="icon-detail.jpeg" />
                                    </a>
                                    <a className="pt" href="#product-2">
                                        <img src={detail2} alt="icon-detail.jpeg" />
                                    </a>
                                    <a className="pt" href="#product-3">
                                        <img src={detail3} alt="icon-detail.jpeg" />
                                    </a>
                                    <a className="pt" href="#product-4">
                                        <img src={detail4} alt="icon-detail.jpeg" />
                                    </a>
                                </div>
                                <div className="product__details__slider__content">
                                    <div className="product__details__pic__slider owl-carousel">
                                        <img data-hash="product-1" className="product__big__img" src={productDetail1} alt="detail.jpeg" />
                                        {/* <img data-hash="product-2" className="product__big__img" src={productDetail2} alt="detail.jpeg" />
                                        <img data-hash="product-3" className="product__big__img" src={productDetail3} alt="detail.jpeg" />
                                        <img data-hash="product-4" className="product__big__img" src={productDetail4} alt="detail.jpeg" /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="product__details__text">
                                <h3>Essential structured blazer <span>Brand: SKMEIMore Men Watches from SKMEI</span></h3>
                                <div className="rating">
                                    <i className="fa fa-star p-1"></i>
                                    <i className="fa fa-star p-1"></i>
                                    <i className="fa fa-star p-1"></i>
                                    <i className="fa fa-star p-1"></i>
                                    <i className="fa fa-star p-1"></i>
                                    <span>( 138 reviews )</span>
                                </div>
                                <div className="product__details__price">$ 75.0 <span>$ 83.0</span></div>
                                <p>Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur
                                    magni lores eos qui ratione voluptatem sequi nesciunt.</p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="product__details__tab">
                                <ul className="nav nav-tabs" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="tab" href="#tabs-1" role="tab">Description</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-2" role="tab">Specification</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="tab" href="#tabs-3" role="tab">Reviews ( 2 )</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                        <h6>Description</h6>
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                            quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                            Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                            voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                            consequat massa quis enim.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                            quis, sem.</p>
                                    </div>
                                    <div className="tab-pane" id="tabs-2" role="tabpanel">
                                        <h6>Specification</h6>
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                            quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                            Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                            voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                            consequat massa quis enim.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                            quis, sem.</p>
                                    </div>
                                    <div className="tab-pane" id="tabs-3" role="tabpanel">
                                        <h6>Reviews ( 2 )</h6>
                                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed
                                            quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt loret.
                                            Neque porro lorem quisquam est, qui dolorem ipsum quia dolor si. Nemo enim ipsam
                                            voluptatem quia voluptas sit aspernatur aut odit aut loret fugit, sed quia ipsu
                                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Nulla
                                            consequat massa quis enim.</p>
                                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
                                            dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                                            nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                                            quis, sem.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="related__title">
                                <h5>RELATED PRODUCTS</h5>
                            </div>
                        </div>
                        <Suspense fallback={<div className="col-md-12 text-center">Loading ....</div>}>
                            {
                                products.slice(0, 4).map((value, index) => (
                                    <Product slug={value.slug} key={index} title={value.title} img={value.img} price={value.price} status="" category="" />
                                ))
                            }
                        </Suspense>
                    </div>
                </div>
            </section>
            <Suspense fallback={<div className="col-md-12 text-center">Loading ....</div>}>
                <div className="instagram">
                    <div className="container-fluid">
                        <div className="row">
                            {[...Array(6)].map((_, index) => (
                                <Instagram key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </Suspense>
        </>
    )
}
export default Component