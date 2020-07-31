import React from "react";

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
      <h4 onClick={() => showDetail(issue)}>{issue.title}</h4>
      <p>{issue.body}</p>
    </div>
  );
};

export default IssueList;
