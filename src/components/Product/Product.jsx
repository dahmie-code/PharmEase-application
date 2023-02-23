import React from 'react';
import { Tabs, Tab} from 'react-bootstrap';
// import ProductTab from './ProductTab';
import ProductList from './ProductList';
import CategoryTable from './CategoryTable';
import TitleBar from '../Global/TitleBar';
import "./ProductList.css";


function Product() {
  return (
    <div className='product-wrapper'>
    <TitleBar title="Product" icon="GiMedicines" />
    <div className="container mt-5 product-container">
      <Tabs defaultActiveKey="products" id="uncontrolled-tab-example">
        <Tab eventKey="products" title="Product">
        <ProductList />
        </Tab>
        <Tab eventKey="categories" title="Category">
          <CategoryTable />
        </Tab>
      </Tabs>
    </div>
    </div>
  );
}

export default Product;
