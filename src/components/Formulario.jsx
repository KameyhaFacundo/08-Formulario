import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nombre || !apellido || !dni || !email) {
      alert("Completar todos los datos");
    } else alert("Datos enviados");
    e.target.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit} style={{ backgroundColor: "white" }}>
        <Form.Group className="mb-3 p-2">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            id="nombre"
            placeholder="Ingrese un nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 p-2">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            id="apellido"
            placeholder="Ingrese un apellido"
            onChange={(e) => setApellido(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 p-2">
          <Form.Label>DNI</Form.Label>
          <Form.Control
            type="text"
            id="dni"
            placeholder="Ingrese un dni"
            onChange={(e) => setDni(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3 p-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            placeholder="Ingrese un correo electronico"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Button className="m-2" variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </>
  );
};

export default Formulario;
