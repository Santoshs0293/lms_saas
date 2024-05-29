import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from "axios";

const AddLectureModal = ({ show, handleClose, courseId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  const handleAddLecture = () => {
    const newLecture = {
      title,
      description,
      videoUrl,
    };

    axios.post(`/api/courses/${courseId}/lectures`, newLecture)
      .then(() => handleClose())
      .catch((error) => console.error("Error adding lecture:", error));
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Lecture</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formLectureTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formLectureDescription" className="mt-2">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formLectureVideoUrl" className="mt-2">
            <Form.Label>Video URL</Form.Label>
            <Form.Control
              type="text"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddLecture}>
          Add Lecture
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddLectureModal;
