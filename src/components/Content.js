import React, { useState } from "react";
import './css/content.css'
import { Row, Col, Button, Card, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import contentData from "../utils/contentData";
import { connect } from 'react-redux';
import { addCart } from '../actions/addAction'


function Content(props) {
  console.log(props);
// const [cartNums, setCartNums] = useState(0);

// const addToCart = () => {
//   console.log("add to carto");
//   setCartNums(cartNums + 1)
// }
const {
  // buttonLabel,
  className,
  wording = "ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
} = props;

const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

  const styles = {
    marginBottom: "1.5rem"
  }
  const btn = {
    float: "right"
  }
  const filterData = contentData.filter((product) => {
    return product.title.toLowerCase().includes(props.search.toLowerCase())
  })

  return (
    <>
    <div className="next-steps my-5">
      <h2 className="my-5 text-center">Beanie Gs
      {/* {cartNums} */}
      </h2>
      <Row>
        {filterData.map((col, i) => (
          <Col key={i} md={3} style={styles}>
            <Card>
            <Button onClick={toggle}><img key={i} className="productImg" src={col.img} alt={col.title} /></Button>
            <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
              <ModalHeader toggle={toggle}>{col.title}</ModalHeader>
              <ModalBody>
            <img className="productImgModal" src={col.img} alt={col.title} />
              <aside>
                <h5>Description</h5>
                <hr/>
                <p>{col.description}</p>
              </aside>
              </ModalBody>
              <ModalFooter>
                {/* <Button color="primary" onClick={toggle}>Do Something</Button>{' '} */}
                <Button className = "cartbtn" color="secondary" onClick={() => props.addCart(col)}>Add to cart</Button>
              </ModalFooter>
            </Modal>
              <h6>
                {col.title}
              </h6>
            <div className="btn-pricecart"> <h5> $ {col.price}
              <Button 
              onClick={() => props.addCart(col)}
              style={btn} 
              className = "cartbtn"
              >
                Add to cart
              </Button></h5>
            </div>
            </Card>
            
          </Col>
        ))}
      </Row>
    </div>
    </>
  );
        
}

export default connect(null, { addCart })(Content);
