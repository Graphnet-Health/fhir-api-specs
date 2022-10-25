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
      title: "CareCentric FHIR API (STU3)",
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
        //{
          //to: "docs/profiles/profileOverview",
          //activeBasePath: "docs",
          //label: "Profiles",
          //position: "left",
        //},
        {
          to: "docs/examples/exampleOverview",
          activeBasePath: "docs",
          label: "Examples",
          position: "left",
        },
        {
          to: "docs/version-history/releases",
          activeBasePath: "docs",
          label: "Version 0.6.0 (Alpha)",
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
    version: "0.1.0 - Alpha",
    jira: {
      display: true,
      base: "https://jira.systemc.com/browse/",
    },
    resources: [
      {
        type: "Immunization",
        active: false,
        profile:
          "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Immunization-1",
        get: "amber",
        post: "amber",
        put: "amber",
        delete: "amber",
      },
      {
        type: "Flag",
        active: false,
        profile:
          "https://fhir.graphnethealth.com/STU3/StructureDefinition-Flag",
        get: "amber",
        post: "amber",
        put: "amber",
        delete: "amber",
      },
      //{
        //type: "DiagnosticResult",
        //active: false,
        //profile:
          //"https://fhir.graphnethealth.com/STU3/StructureDefinition/DiagnosticResult",
        //get: "red",
        //post: "red",
        //put: "red",
        //delete: "red",
      //},
      {
        type: "FamilyMemberHistory",
        active: false,
        profile:
          "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-FamilyMemberHistory-1",
        get: "amber",
        post: "red",
        put: "red",
        delete: "red",
      },
      {
        type: "Observation",
        active: true,
        profile:
          "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Observation-1",
        get: "green",
        post: "amber",
        put: "amber",
        delete: "amber",
      },
      {
        type: "Patient",
        active: true,
        profile:
          "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Patient-1",
        get: "green",
        post: "red",
        put: "red",
        delete: "red",
      },
      {
        type: "DocumentReference",
        active: false,
        profile:
          "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-DocumentReference-1",
        get: "amber",
        post: "red",
        put: "red",
        delete: "red",
      },
      {
        type: "Encounter",
        active: false,
        profile:
          "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Encounter-1",
        get: "amber",
        post: "red",
        put: "red",
        delete: "red",
      },
      {
        type: "Condition",
        active: false,
        profile:
          "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Condition-1",
        get: "amber",
        post: "amber",
        put: "amber",
        delete: "amber",
      },
      {
        type: "Procedure",
        active: false,
        profile:
          "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-Procedure-1",
        get: "amber",
        post: "amber",
        put: "amber",
        delete: "amber",
      },
      {
        type: "AllergyIntolerance",
        active: true,
        profile:
          "https://fhir.hl7.org.uk/STU3/StructureDefinition/CareConnect-AllergyIntolerance-1",
        get: "green",
        post: "red",
        put: "red",
        delete: "red",
      },
      {
        type: "MedicationStatement",
        active: true,
        profile:
          "https://fhir.graphnethealth.com/STU3/StructureDefinition/MedicationStatement",
        get: "green",
        post: "amber",
        put: "amber",
        delete: "amber",
      },
      {
        type: "MedicationRequest",
        active: true,
        profile:
          "https://fhir.graphnethealth.com/STU3/StructureDefinition/MedicationRequest",
        get: "green",
        post: "red",
        put: "red",
        delete: "red",
      },
      {
        type: "QuestionnaireResponse",
        active: false,
        profile:
          "https://fhir.graphnethealth.com/STU3/StructureDefinition/QuestionnaireResponse",
        get: "amber",
        post: "amber",
        put: "amber",
        delete: "amber",
      },
      {
        type: "Binary",
        active: false,
        profile: "",
        get: "amber",
        post: "red",
        put: "red",
        delete: "red",
      },
    ],
    staticDirectories: ['public', 'static'],
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
