import { Form } from 'react-bootstrap';

const ModalForm = ({ name, image, category, price, setName, setImage, setCategory, setPrice, productView }) => {
  return (
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
  );
};

export default ModalForm;
