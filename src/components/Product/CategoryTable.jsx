import { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import AddCategoryModal from './AddCategoryModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { category } from './category';
import Pagination from '../Global/Pagination';
// import { v4 as uuidv4 } from 'uuid';


const CategoryTable = ({ categories = category }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [editingCategories, setEditingCategories] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    setFilteredCategories(categories);
    }, [categories]);

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingCategories(null);
  };

  const handleShowModal = () => {
    setShowModal(true);
    setEditingCategories(null);
  };

  const handleAdd = (newCategory) => {
    const updatedCategories = [
    ...filteredCategories,
    { ...newCategory, id: filteredCategories.length + 1 }
    ];
    setFilteredCategories(updatedCategories);
    console.log(updatedCategories);
    
    }
  
  const handleEditClick = (category) => {
    setEditingCategories(category);
    setShowModal(true);
  };

  const handleDeleteClick = (id) => {
    const updatedCategories = categories.filter(
      (category) => category.id !== id
    );
    setFilteredCategories(updatedCategories);
    setEditingCategories(null);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    const searchResults = categories.filter((category) => {
      return category.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setFilteredCategories(searchResults);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //   Logic to display current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredCategories.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Button variant="primary" className="addProduct-btn" onClick={handleShowModal}>
          Add New +
        </Button>
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
            <th>Category Name</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((category, index) => (
            <tr key={category.id}>
              <td>{index + 1}</td>
              <td>{category.name}</td>
              <td>
                <Button className= "categoryEdit-btn category-btn" onClick={() => handleEditClick(category)}>Edit</Button>
              </td>
              <td>
                <Button className='categoryDelete-btn category-btn' onClick={() => handleDeleteClick(category.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filteredCategories.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <AddCategoryModal
        show={showModal}
        handleClose={handleCloseModal}
        handleAdd={handleAdd}
        editingCategories={editingCategories}
        handleDeleteClick={handleDeleteClick}
        handleEditClick={handleEditClick}
      />
    </div>
  );
};

export default CategoryTable;
