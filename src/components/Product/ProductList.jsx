import { useState } from "react";
import { Table, Button, Dropdown } from "react-bootstrap";
import AddProductModal from "./AddProductModal";
import "bootstrap/dist/css/bootstrap.min.css";
import { productsData } from "./data";
import Pagination from "../Global/Pagination";

const ProductList = ({ products = productsData }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productView, setProductView] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingProduct(null);
    setProductView(null);
  };

  const handleShowModal = () => {
    setShowModal(true);
    setEditingProduct(null);
    setProductView(null);
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  const handleViewClick = (product) => {
    setProductView(product);
    setShowModal(true);
  };
  const handleDeleteClick = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setFilteredProducts(updatedProducts);
    setEditingProduct(null);
  };

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

  // Logic for pagination

//   const pageNumbers = [];
//   for (
//     let i = 1;
//     i <= Math.ceil(filteredProducts.length / productsPerPage);
//     i++
//   ) {
//     pageNumbers.push(i);
//   }

  return (
    <div >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Button
          variant="primary"
          className="addProduct-btn"
          onClick={handleShowModal}
        >
          Add New +
        </Button>
        <input
          type="text"
          placeholder="Search "
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div>
        <Table bordered responsive hover >
        <thead>
          <tr>
            <th>S/N</th>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Expiry Date</th>
            <th>Quantity</th>
            <th>Price Per Unit</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1 + (currentPage - 1) * productsPerPage}</td>
              <td>
                <img src={product.image} alt={product.name} height="50" />
              </td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.expiry}</td>
              <td>{product.quantity}</td>
              <td>{product.price}</td>
              <td>
                <Dropdown>
                  <Dropdown.Toggle
                    className="toggle-btn"
                    variant="secondary"
                    id="dropdown-basic"
                  >
                    Action
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleEditClick(product)}>
                      Edit
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => handleViewClick(product)}>
                      View
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleDeleteClick(product.id)}
                    >
                      Delete
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </td>
            </tr>
          ))}
        </tbody>
      </Table></div>
      
      {/* Pagination */}
      {/* <div className="d-flex justify-content-end">
        <nav>
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <a className="page-link" onClick={() => paginate(number)}>
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div> */}
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <AddProductModal
        show={showModal}
        handleClose={handleCloseModal}
        editingProduct={editingProduct}
        productView={productView}
      />
    </div>
  );
};

export default ProductList;
