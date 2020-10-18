import React, { Fragment, useState } from "react";
import { Form, FormGroup, Input } from 'reactstrap';
import Hero from "../components/Hero";
import Content from "../components/Content";

const Home = () =>
{ 
  const [ search, setSearch] = useState("");
  return (
  <Fragment>
    <Form>
      <FormGroup>
      </FormGroup>
    </Form>
    <Hero />
        <Input type="text" name="product" id="productSearch" placeholder="Search" value={search} onChange={event => setSearch(event.target.value)} />
    <hr />
    <Content search={search} />
    
  </Fragment>
)};

export default Home;
