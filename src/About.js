import React, { useState } from "react";
import {
  Button,
  Toast,
  Row,
  Col,
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";
import { Offcanvas } from "react-bootstrap";

export function About() {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1>About Component</h1>
      <Row>
        <Col md={6} className="mb-2">
          <Button onClick={toggleShowA} className="mb-2 btn-info">
            Toggle Toast <strong>with</strong> Animation
          </Button>
          <Toast show={showA} onClose={toggleShowA}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
        <Col md={6} className="mb-2">
          <Button onClick={toggleShowB} className="mb-2 btn-warning">
            Toggle Toast <strong>without</strong> Animation
          </Button>
          <Toast onClose={toggleShowB} show={showB} animation={false}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
      </Row>

      {["Primary", "Success", "Danger"].map((variant) => (
        <DropdownButton
          as={ButtonGroup}
          key={variant}
          id={`dropdown-variants-${variant}`}
          variant={variant.toLowerCase()}
          title={variant}
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3" active>
            Active Item
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
      ))}
      <img
        src="data:image/jpeg;base64,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"
        alt="normal"
        style={{ width: "40%", height: "auto", margin: "40px" }}
      />
      <section className="mt-5 mb-5">
        <Button variant="primary" onClick={handleShow}>
          Launch
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Anupam Guin</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            My Name is Anupam Guin, This is a Demo Progressive Web Application
            To test that is running in mobile or Not... Thank You
          </Offcanvas.Body>
        </Offcanvas>
      </section>
    </div>
  );
}

export default About;
