import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import "./styles.css";

function displayStatus(x, verb) {
  var css = "";

  switch (x) {
    case "green":
      css = `linkItem-grid-message linkItem-grid-httpGreen`;
      break;
    case "amber":
      css = `linkItem-grid-message linkItem-grid-httpAmber`;
      break;
    default:
      css = `linkItem-grid-message linkItem-grid-httpRed`;
  }
  return <div className={css}>{verb}</div>;
}
const LinkItem = (props) => {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  console.log(customFields);

  const entry = (
    <Link className="linkItem-container">
      <div className="linkItem-grid-container">
        {displayStatus(props.status, "GET")}
        <div className="linkItem-grid-statusText">{props.text}</div>
      </div>
    </Link>
  );

  return entry;
};

export default LinkItem;
