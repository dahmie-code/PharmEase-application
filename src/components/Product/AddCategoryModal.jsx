import { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddCategoryModal = ({ show, handleClose, editingCategories, handleAdd, handleEditClick, handleDeleteClick }) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (editingCategories) {
      setName(editingCategories.name);
    }
  }, [editingCategories]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingCategories) {
      handleEditClick({...editingCategories, name});
    } else {
      handleAdd({name});
      console.log("name: ", name);

    }
    handleClose();
  }

  const handleDelete = () => {
    handleDeleteClick(editingCategories.id);
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{editingCategories ? 'Edit' : 'Add New' } Category </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter category name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {editingCategories && (
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        )}
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit">
          {editingCategories ? 'Save Changes' : 'Add Category'}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddCategoryModal;
