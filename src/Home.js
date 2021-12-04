import React, { useState } from "react";
import { Alert, ProgressBar, Modal, Button, Form } from "react-bootstrap";

export function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <h1>Home Component</h1>
      <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p className="mb-0">
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>

      <ProgressBar animated striped variant="danger" now={80} />

      <div className="mt-4">
        <Button variant="info" onClick={handleShow}>
          Launch demo modal
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <section>
        {/* <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label> */}
        <Form.Control
          type="color"
          id="exampleColorInput"
          defaultValue="#e74292"
          title="Choose your color"
        />
      </section>

      <div className="mt-4 mb-4">
        <Form.Label>Range</Form.Label>
        <input type="range"></input>
      </div>
    </div>
  );
}

export default Home;
