import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import "./styles.css";

const JiraTag = (props) => {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  const { jira } = customFields;

  const jiraDisplay = jira.display;
  const jiraTarget = jira.base + props.id;

  const tag = jiraDisplay && (
    <div className="jiraLink">
      <Link to={jiraTarget}>
        <span className="jira">{props.id}</span>
      </Link>{" "}
    </div>
  );

  return tag;
};

export default JiraTag;
