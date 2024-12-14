import logo from "../../assets/img/logo.png"
const Header = () => {
    return (
        <>
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-2">
                            <div className="header__logo">
                                <a href="./index.html"><img src={logo} alt="logo.png" /></a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-10 text-right">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active"><a href="./index.html">Home</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__right">
                                <div className="header__right__auth">
                                    <a href="#">Login</a>
                                    <a href="#">Register</a>
                                </div>
                                <ul className="header__right__widget">
                                    <li><span className="icon_search search-switch"></span></li>
                                    <li><a href="#"><span className="icon_heart_alt"></span>
                                        <div className="tip">2</div>
                                    </a></li>
                                    <li><a href="#"><span className="icon_bag_alt"></span>
                                        <div className="tip">2</div>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="canvas__open">
                            <i className="fa fa-bars"></i>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header