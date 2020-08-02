import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import Moment from "react-moment";

const IssueList = ({ issues, showDetail }) => {
  return (
    <div>
      {issues.map((issue) => (
        <IssueDetail key={issue.id} issue={issue} showDetail={showDetail} />
      ))}
    </div> 
  );
};

const IssueDetail = ({ issue, showDetail }) => {
  return (
    <div>
      <Row>
        <Col className="avatar-list" md={2}>
          <img
            src={issue.user.avatar_url}
            width="120px"
            height="120px"
            margin="20%"
            alt="avatar"
          ></img>
        </Col>
        <Col
          className="issue-list-button"
          onClick={() => showDetail(issue)}
          md={10}
        >
          <h5 className="title-list" onClick={() => showDetail(issue)}>
            {issue.title}
          </h5>
          <div className="time-comments">
            <span>@{issue.user.login}</span>
            <span>Comments: {issue.comments}</span>
            <span>
              Last update: <Moment fromNow>{issue.created_at}</Moment>
            </span>
          </div>
          <p className="text-area-list">
            {issue.body.slice(0, 200)}
            {/* <Button className="btn-list" variant="primary">
              more...
            </Button> */}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default IssueList;
