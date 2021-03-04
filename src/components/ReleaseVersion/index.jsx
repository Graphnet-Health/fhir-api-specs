import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

const ReleaseVersion = (props) => {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;

  console.log(siteConfig);

  const output = <span>{customFields.version}</span>;

  return output;
};

export default ReleaseVersion;
