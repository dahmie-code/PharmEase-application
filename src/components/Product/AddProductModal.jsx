import {useState, useEffect} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddProductModal = ({ show, handleClose, editingProduct, productView }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');  
  const [isViewing, setIsViewing] = useState(false);

  useEffect(() => {
    if (editingProduct) {
      setName(editingProduct.name);
      setImage(editingProduct.image);
      setCategory(editingProduct.category);
      setPrice(editingProduct.price);
    }
  }, [editingProduct]);

  const handleView = () => {
    setIsViewing(true);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{editingProduct ? 'Edit' : 'Add New' || isViewing ? 'View' : 'Add New'} Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={productView}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="file"
              placeholder="Enter image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              disabled={productView}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="productCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              disabled={productView}
            >
              <option value="">Select category</option>
              <option value="Medicine">Medicine</option>
              <option value="Supplement">Supplement</option>
              <option value="Vitamin">Vitamin</option>
              <option value="Other">Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              disabled={productView}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        {!productView && (
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        )}
        {editingProduct && !productView && (
          <Button variant="secondary" onClick={handleView}>
            View
          </Button>
        )}
        {!productView && (
          <Button variant="primary" onClick={handleClose}>
            {productView ? 'Save Changes' : 'Add Product'}
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default AddProductModal;
