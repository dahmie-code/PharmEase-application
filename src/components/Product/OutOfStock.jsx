import { useState} from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { productsData } from './data';
import Pagination from '../Global/Pagination';
import Badge from 'react-bootstrap/Badge';


const OutOfStock = () => {  
    const [filteredProducts, setFilteredProducts] = useState(productsData);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(10);

    // Filter out-of-stock products
    const outOfStockProducts = filteredProducts.filter(
      (product) => product.status === "Out of Stock"

    );
   
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //   Logic to display current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <>
      <Table bordered hover responsive="sm md lg xl">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Product Name</th>
            <th>Batch No</th>
            <th>Quantity</th>
            <th>Expiry Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {outOfStockProducts.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1 + (currentPage - 1) * productsPerPage}</td>
              <td>{product.name}</td>
              <td>{product.batch}</td>
              <td>{product.quantity}</td>
              <td>{product.expiry}</td>
              <td><Badge className={product.status === "In Stock" ? "pill bg-success text-white" : "pill bg-danger text-white"}>
                {product.status}
              </Badge></td>

            </tr>
          ))}
        </tbody>
      </Table>

    </>
  );
};

export default OutOfStock;

