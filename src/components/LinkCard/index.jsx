import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import "./styles.css";

function compare(a, b) {
  return a.type < b.type ? -1 : 1;
}

function linkString(x) {
  return "/docs/api/api" + x;
}

function displayStatus(x, verb) {
  // const css = x
  //   ? `lc-grid-http{verb} lc-grid-httpTRUE`
  //   : "lc-grid-http{verb} lc-grid-httpFALSE";

  var css = "";

  switch (x) {
    case "green":
      css = `lc-grid-http{verb} lc-grid-httpGreen`;
      break;
    case "amber":
      css = `lc-grid-http{verb} lc-grid-httpAmber`;
      break;
    default:
      css = `lc-grid-http{verb} lc-grid-httpRed`;
  }
  return <div className={css}>{verb}</div>;
}
const LinkCard = (props) => {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  console.log(customFields);

  const entries = customFields.resources.sort(compare).map((x) => (
    <Link className="lc-container" to={linkString(x.type)}>
      <div className="lc-grid-container">
        <div className="lc-grid-resourceName">{x.type}</div>
        {displayStatus(x.get, "GET")}
        {displayStatus(x.post, "POST")}
        {displayStatus(x.put, "PUT")}
        {displayStatus(x.delete, "DELETE")}
      </div>
    </Link>
  ));

  console.log(entries);

  return entries;
};

export default LinkCard;
