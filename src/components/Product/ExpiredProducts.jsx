import { useState} from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { productsData } from './data';
import Pagination from '../Global/Pagination';
import Badge from 'react-bootstrap/Badge';


const ExpiredProducts = ({ products = productsData }) => {  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        const searchResults = products.filter((product) => {
          return product.name
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        });
        setFilteredProducts(searchResults);
      };
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //   Logic to display current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">

        <input
          type="text"
          placeholder="Search "
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <Table bordered hover responsive="sm md lg xl">
        <thead>
          <tr>
            <th>S/N</th>
            <th>Product Name</th>
            <th>Batch No</th>
            <th>Quantity</th>
            <th>Price Per Unit</th>
            <th>Expiry Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1 + (currentPage - 1) * productsPerPage}</td>
              <td>{product.name}</td>
              <td>{product.batch}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>{product.expiry}</td>
              <td><Badge className={product.status === "In Stock" ? "pill bg-success text-white" : "pill bg-danger text-white"}>
                {product.status}
              </Badge></td>

            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default ExpiredProducts;
