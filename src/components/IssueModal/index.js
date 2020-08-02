import React from "react";
import { Modal, Media, Button } from "react-bootstrap";
import styles from "./IssueModal.module.css";
import ReactMarkdown from "react-markdown";
import Moment from "react-moment";
import ClipLoader from "react-spinners/ClipLoader";

const IssueModal = ({
  showModal,
  setShowModal,
  selectedIssue,
  comments,
  commentsLoading,
  handleMore,
  disableShowMore,
}) => {
  if (!comments) return <div></div>;
  return (
    <div>
      {selectedIssue && (
        <Modal
          size="xl"
          show={showModal}
          onHide={() => setShowModal(false)}
          aria-labelledby="issue-detail-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="issue-detail-modal">
              <span className="mr-2">#{selectedIssue.number}</span>
              <span>{selectedIssue.title}</span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ReactMarkdown source={selectedIssue.body} />
            <hr />
            <h4>Comments</h4>
            <ul className="list-unstyled">
              {comments && comments.length ? (
                comments.map((comment) => (
                  <Comments key={comment.id} {...comment} />
                ))
              ) : (
                <li>There are no comments of this issue</li>
              )}
            </ul>
            <div className="d-flex justify-content-center">
              {commentsLoading ? (
                <ClipLoader
                  color="#f86c6b"
                  size={75}
                  loading={commentsLoading}
                />
              ) : (
                <>
                  {!disableShowMore && (
                    <Button
                      type="button"
                      onClick={handleMore}
                      disabled={disableShowMore}
                    >
                      Show More
                    </Button>
                  )}
                </>
              )}
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

const Comments = ({ user, body, created_at }) => {
  return (
    <Media as="li" className="mb-3">
      <img
        src={user.avatar_url}
        alt="User Avatar"
        className={`${styles["avatar"]} mr-3`}
      />
      <Media.Body className="text-left">
        <div>
          <span className={`${styles["text-grey"]} mr-2`}>@{user.login}</span>
          <span className={styles["text-grey"]}>
            commented <Moment fromNow>{created_at}</Moment>
          </span>
        </div>
        <ReactMarkdown source={body} />
      </Media.Body>
    </Media>
  );
};

export default IssueModal;
