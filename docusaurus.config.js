module.exports = {
  title: "CareCentric FHIR API Guide",
  tagline: "FHIR API guide for CareCentric",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    // prism: {
    //   additionalLanguages: ["c"],
    // },
    announcementBar: {
      id: "supportus-new",
      content:
        '<span class="text-white">🚧 Development Version - Not for use 🚧</span>',
    },
    navbar: {
      title: "CareCentric FHIR API",
      logo: {
        alt: "Graphnet Health Logo",
        src: "img/Graphnet-Logo-500px.png",
      },
      // prism: {
      //   additionalLanguages: ["powershell"],
      // },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "docs/api/apiOverview",
          activeBasePath: "docs",
          label: "API",
          position: "left",
        },
        {
          to: "docs/profiles/profileOverview",
          activeBasePath: "docs",
          label: "Profiles",
          position: "left",
        },
        {
          to: "docs/examples/exampleOverview",
          activeBasePath: "docs",
          label: "Examples",
          position: "left",
        },
        {
          to: "docs/version-history/releases",
          activeBasePath: "docs",
          label: "Version 0.1.0",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Graphnet Health Logo",
        src: "img/Graphnet-Logo-500px.png",
        href: "https://www.graphnethealth.com/",
      },
      links: [
        {
          title: "Docs",
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
            {
              label: "INTEROPen",
              href: "https://www.interopen.org/",
            },
            {
              label: "HL7 UK",
              href: "https://www.hl7.org.uk/",
            },
          ],
        },
        {
          title: "More",
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Graphnet Health Limited.`,
    },
  },
  customFields: {
    version: "0.1.0",
    jira: {
      display: true,
      base: "https://jira.systemc.com/browse/",
    },
    resources: [
      {
        type: "Immunization",
        profile:
          "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Immunization-1",
        get: "green",
        post: "amber",
        put: "amber",
        delete: "amber",
      },
      {
        type: "Observation",
        profile:
          "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Observation-1",
        get: "green",
        post: "green",
        put: "green",
        delete: "green",
      },
      {
        type: "Patient",
        profile:
          "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Patient-1",
        get: "green",
        post: "red",
        put: "red",
        delete: "red",
      },
      {
        type: "Encounter",
        profile:
          "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Encounter-1",
        get: "green",
        post: "red",
        put: "red",
        delete: "red",
      },
      {
        type: "Condition",
        profile:
          "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Condition-1",
        get: "green",
        post: "amber",
        put: "amber",
        delete: "amber",
      },
      {
        type: "Procedure",
        profile:
          "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Procedure-1",
        get: "green",
        post: "amber",
        put: "amber",
        delete: "amber",
      },
      {
        type: "AllergyIntolerance",
        profile:
          "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-AllergyIntolerance-1",
        get: "green",
        post: "amber",
        put: "amber",
        delete: "amber",
      },
      {
        type: "MedicationStatement",
        profile:
          "https://fhir.graphnethealth.com/STU3/StructureDefinition/MedicationStatement",
        get: "green",
        post: "amber",
        put: "amber",
        delete: "amber",
      },
      {
        type: "MedicationRequest",
        profile:
          "https://fhir.graphnethealth.com/STU3/StructureDefinition/MedicationRequest",
        get: "green",
        post: "red",
        put: "red",
        delete: "red",
      },
      {
        type: "QuestionnaireResponse",
        profile:
          "https://fhir.graphnethealth.com/STU3/StructureDefinition/MedicationRequest",
        get: "red",
        post: "red",
        put: "red",
        delete: "red",
      },
      {
        type: "Binary",
        profile:
          "https://fhir.graphnethealth.com/STU3/StructureDefinition/MedicationRequest",
        get: "red",
        post: "red",
        put: "red",
        delete: "red",
      },
    ],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          // homePageId: "api_introduction",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
