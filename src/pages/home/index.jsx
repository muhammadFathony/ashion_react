import { lazy, Suspense, useRef, useEffect } from "react"
import mixitup from "mixitup"

import category1 from "../../assets/img/categories/category-1.jpg"
import category2 from "../../assets/img/categories/category-2.jpg"
import category3 from "../../assets/img/categories/category-3.jpg"
import category4 from "../../assets/img/categories/category-4.jpg"
import category5 from "../../assets/img/categories/category-5.jpg"

import product1 from "../../assets/img/product/product-1.jpg"
import product2 from "../../assets/img/product/product-2.jpg"
import product3 from "../../assets/img/product/product-3.jpg"
import product4 from "../../assets/img/product/product-4.jpg"

const ContainCateogories = lazy(() => import("../../components/categories"))
const ConatinCategory = lazy(() => import("../../components/categories/category"))
const Products = lazy(() => import("../../components/products"))
const Banner = lazy(() => import("../../components/banner"))
const TrendItem = lazy(() => import("../../components/trends"))
const Discount = lazy(() => import("../../components/discount"))
const Spad = lazy(() => import("../../components/spad"))
const Instagram = lazy(() => import("../../components/instagram"))
const categories = [
    {
        img: category1,
        title: "Women’s fashion",
        subtitle: "Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt laboren edolore magna aliquapendisse ultrices gravida."
    },
    {
        img: category2,
        title: "Men’s fashion",
        subtitle: "358 items"
    },
    {
        img: category3,
        title: "Kid’s fashion",
        subtitle: "273 items"
    },
    {
        img: category4,
        title: "Cosmetic’s",
        subtitle: "159 items."
    },
    {
        img: category5,
        title: "Accessories",
        subtitle: "792 items"
    }
]
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
const Component = () => {
    const containerRef = useRef(null);
    useEffect(() => {
        if (containerRef.current) {
            mixitup(containerRef.current, {
                selectors: {
                    target: ".mix"
                },
                animation: {
                    duration: 300
                }
            })
        }
    }, [])
    return (
        <>
            <Suspense fallback={<div className="col-md-12 text-center">Loading ....</div>}>
                <section className="categories">
                    <div className="container-fluid">
                        <div className="row">
                            <ConatinCategory
                                title={categories[0].title}
                                subtitle={categories[0].subtitle}
                                img={categories[0].img}
                                big={true}
                            />
                            <div className="col-lg-6">
                                <ContainCateogories categories={categories} />
                            </div>
                        </div>
                    </div>
                </section>
            </Suspense>
            <Suspense fallback={<div className="col-md-12 text-center">Loading ....</div>}>
                <section className="product spad">
                    <div className="container">
                        <Products products={products} />
                    </div>
                </section>
            </Suspense>
            <Suspense fallback={<div className="col-md-12 text-center">Loading ....</div>}>
                <Banner sliders={categories} />
            </Suspense>
            <Suspense fallback={<div className="col-md-12 text-center">Loading ....</div>}>
                <section className="trend spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="trend__content">
                                    <div className="section-title">
                                        <h4>Hot Trend</h4>
                                    </div>
                                    {products.slice(0, 3).map((value, index) => (
                                        <TrendItem key={index} title={value.title} img={value.img} price={value.price} />
                                    ))}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="trend__content">
                                    <div className="section-title">
                                        <h4>Best Seller</h4>
                                    </div>
                                    {products.slice(0, 3).map((value, index) => (
                                        <TrendItem key={index} title={value.title} img={value.img} price={value.price} />
                                    ))}
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-6">
                                <div className="trend__content">
                                    <div className="section-title">
                                        <h4>New Products</h4>
                                    </div>
                                    {products.slice(0, 3).map((value, index) => (
                                        <TrendItem key={index} title={value.title} img={value.img} price={value.price} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Suspense>
            <Suspense fallback={<div className="col-md-12 text-center">Loading ....</div>}>
                <Discount />
            </Suspense>
            <Suspense fallback={<div className="col-md-12 text-center">Loading ....</div>}>
                <Spad />
            </Suspense>
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