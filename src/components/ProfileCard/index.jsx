import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import "./styles.css";

function compare(a, b) {
  return a.type < b.type ? -1 : 1;
}

function linkString(x, active) {
  if (active) {
    return "/docs/profiles/" + x;
  }
}

function displayStatus(x, verb) {
  const css = x
    ? `pc-grid-http{verb} pc-grid-httpTRUE`
    : "pc-grid-http{verb} pc-grid-httpFALSE";
  return <div className={css}>{verb}</div>;
}
const ProfileCard = (props) => {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  console.log(customFields);

  function gotProfile(profile) {
    return profile.profile != "";
  }

  function isActive(x) {
    const activeCss = x ? "pc-container" : "pc-containerInfo";
    return activeCss;
  }

  const entries = customFields.resources
    .filter(gotProfile)
    .sort(compare)
    .map((x) => (
      <Link className={isActive(x.active)} to={linkString(x.type, x.active)}>
        <div className="pc-grid-pcontainer">
          <div className="pc-grid-presourceName">{x.type}</div>
          <div className="pc-grid-presourceProfile">{x.profile}</div>
        </div>
      </Link>
    ));

  console.log(entries);

  return entries;
};

export default ProfileCard;
