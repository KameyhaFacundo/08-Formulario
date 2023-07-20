import React from "react";
import { Form, Button } from "react-bootstrap";

const Formulario = () => {
  return (
    <>
      <Form style={{ backgroundColor: "white" }}>
        <Form.Group className="mb-3 p-2" controlId="formGroupEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese un nombre" />
        </Form.Group>

        <Form.Group className="mb-3 p-2" controlId="formGroupEmail">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese un apellido" />
        </Form.Group>
        <Form.Group className="mb-3 p-2" controlId="formGroupEmail">
          <Form.Label>DNI</Form.Label>
          <Form.Control type="text" placeholder="Ingrese un dni" />
        </Form.Group>
        <Form.Group className="mb-3 p-2" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingrese un correo electronico"
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
