import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import AddSegment from "./dropdown";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";

const Cusmodal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <button class="btn btn-outline-secondary" onClick={handleShow}>
        Save Segment
      </button>


      <Navbar key={false} bg="light" expand={false} expanded={show} className="mb-3">
        <Container fluid>
          {/* <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} /> */}
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="end"
          >
            <Offcanvas.Header>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                Saving Segment
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div>
                <AddSegment fun={handleClose} />
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Cusmodal;
