import React, { useState } from "react";
import { useAppContext } from "../store/store";
import Layout from "../components/layout";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

export default function AddItem() {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [image, setImage] = useState("");
  const [caract, setCaract] = useState("");
  const [exist, setExist] = useState(false);

  const store = useAppContext();
  const navigate = useNavigate();

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;

      case "company":
        setCompany(value);
        break;

      case "caract":
        setCaract(value);
        break;

      case "exist":
        setExist(event.target.checked);
        break;

      default:
    }
  }

  function handleChangeFile(event) {
    const element = event.target;
    const file = element.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function () {
      setImage(reader.result.toString());
    };
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: crypto.randomUUID(),
      title,
      company,
      image,
      caract,
      exist,
    };

    store.createItem(newItem);
    navigate("/");
  }

  return (
    <Layout>
  <Form onSubmit={handleSubmit} className="formadditem">
    <Form.Group className="mb-3">
      <Form.Label>Title</Form.Label>
      <Form.Control
        type="text"
        name="title"
        onChange={handleChange}
        value={title}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formCompany">
      <Form.Label>Company</Form.Label>
      <Form.Control
        type="text"
        name="company"
        onChange={handleChange}
        value={company}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formImage">
      <Form.Label>Image</Form.Label>
      <Form.Control type="file" name="image" onChange={handleChangeFile} />
      {!!image && (
        <img src={image} width="200px" alt="Preview" className="mt-2" />
      )}
    </Form.Group>

    <Form.Group className="mb-3" controlId="formCaract">
      <Form.Label>Caract</Form.Label>
      <Form.Control
        type="text"
        name="caract"
        onChange={handleChange}
        value={caract}
      />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formExist">
      <Form.Check
        type="checkbox"
        label="Stock"
        name="exist"
        onChange={handleChange}
        checked={exist}
      />
    </Form.Group>

    <Button variant="primary" type="submit">
      New Item
    </Button>
  </Form>
</Layout>

  );
}
