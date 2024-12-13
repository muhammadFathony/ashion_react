import Category from "../categories/category"
import { Row } from "react-bootstrap"
import PropTypes from 'prop-types';
const Component = ({ categories }) => {
    return (
        <>
            <Row>
                {
                    categories.map((value, key) => {
                        if(key !== 0){
                            return (
                                (
                                    <Category 
                                        title={value.title} 
                                        subtitle={value.subtitle} 
                                        img={value.img} 
                                        key={key} 
                                        big={key === 0}
                                    />
                                )
                            )
                        }
                    })
                }

            </Row>
        </>
    )
}
Component.propTypes = {
    categories: PropTypes.array.isRequired
}
export default Component