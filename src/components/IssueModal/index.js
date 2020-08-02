import React from "react";
import { Modal } from "react-bootstrap";

const ReactMarkdown = require("react-markdown");

const IssueModal = ({ showModal, setShowModal, selectedIssue, comments }) => {
  // console.log('modal comments body',comments[0].body)
  if (!comments) return <div></div>;
  return (
    <div>
      {selectedIssue && (
        <Modal
          size="lg"
          show={showModal}
          onHide={() => setShowModal(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {selectedIssue.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ReactMarkdown>{selectedIssue.body}</ReactMarkdown>

            <h2>Comments:</h2>
            {selectedIssue.comments}

            <p>
              {comments.map((item) => (
                <div>{item.body}</div>
              ))}
            </p>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default IssueModal;
