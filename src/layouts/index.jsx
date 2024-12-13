import Header from "../components/header"
import Footer from "../components/footer"

import { Outlet } from "react-router-dom"
const Component = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default Component