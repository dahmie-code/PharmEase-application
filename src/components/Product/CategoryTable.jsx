import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import AddCategoryModal from './AddCategoryModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { category } from './category';

const CategoryTable = ({ categories = category }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [editingCategories, setEditingCategories] = useState(null);

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingCategories(null);
  };

  const handleShowModal = () => {
    setShowModal(true);
    setEditingCategories(null);
  };

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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S/N</th>
            <th>Category Name</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredCategories.map((category, index) => (
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
      <AddCategoryModal
        show={showModal}
        handleClose={handleCloseModal}
        editingCategories={editingCategories}
      />
    </div>
  );
};

export default CategoryTable;
