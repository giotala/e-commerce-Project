import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getNums } from '../actions/getAction';
import { Row, Col, Button, Card, Container, Table } from "reactstrap";
import { deleteCart } from '../actions/deleteAction';
import TakeMoney from './Checkout';
import './css/content.css'


// const stripePromise = loadStripe(process.env.PUBLISHABLE_KEY);


function Cart(props) {
    useEffect(() => {
        getNums();
    }, []);
    // const styles = {
    //     marginBottom: "1.5rem",
    //     width: "30%"

    // }
    const btn = {
        float: "right"
    }

    const total = props.cartProps.cartItems.reduce((total, currentValue) => total + +currentValue.price, 0)
    // render() 
    return (
        <>
            {/* <h1>hello from cart {props.cartProps.cartNums}</h1> */}
            <div className="next-steps my-5">
                <h2 className="my-5 text-center">Cart
      </h2>
        <Container>
            <Row>
                <Col md={10} >
                    {props.cartProps.cartItems.map((col, i) => (
            <Table>
                  <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
            <tbody>
                <tr key={i}>
                    <td>
                        <h4>{col.title}</h4>
                    </td>
                    <td>
                        <img className="cartImg" src={col.img} alt={col.title} />
                    </td>
                    <td>
                        <h4>${col.price}</h4>
                    </td>
                    <td>
                       
                    </td>
                    <td>  
                        <Button
                        onClick={() => props.deleteCart(col.id)}
                        style={btn}
                        >
                        Remove from Cart
                        </Button>
                    </td>
                </tr>
                
            </tbody>
        </Table>

          
        ))}
        
         </Col>
            <Col>
                <Card>
                    Total: $ {total}
                    <TakeMoney
                        amount={total} />
                </Card>

            </Col>
        </Row>
      
      
      </Container >
    </div >
    </>
        
    )
}


const mapStateToProps = state => ({
    cartProps: state.cartState
})

export default connect(mapStateToProps, { getNums, deleteCart })(Cart);

