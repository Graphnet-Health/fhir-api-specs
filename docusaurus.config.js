module.exports = {
  title: "CareCentric FHIR API Guide",
  tagline: "FHIR API guide for CareCentric",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.png",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "CareCentric FHIR API",
      logo: {
        alt: "My Site Logo",
        src: "img/Graphnet-Logo-500px.png",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "docs/resources/profileOverview",
          activeBasePath: "docs",
          label: "Resources",
          position: "left",
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
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Graphnet Health Limited.`,
    },
  },
  customFields: {
    resources: [
      {
        type: "Immunization",
        get: true,
        post: false,
        put: false,
        delete: false,
      },
      {
        type: "AllergyIntolerance",
        get: true,
        post: false,
        put: false,
        delete: false,
      },
      {
        type: "Condition",
        get: true,
        post: false,
        put: false,
        delete: false,
      },
      {
        type: "Observation",
        get: true,
        post: true,
        put: true,
        delete: false,
      },
      {
        type: "ProcedureRequest",
        get: false,
        post: false,
        put: false,
        delete: false,
      },
      {
        type: "ReferralRequest",
        get: false,
        post: false,
        put: false,
        delete: false,
      },
      {
        type: "QuestionnaireResponse",
        get: false,
        post: false,
        put: false,
        delete: false,
      },
      {
        type: "FamilyMemberHistory",
        get: false,
        post: false,
        put: false,
        delete: false,
      },
      {
        type: "Patient",
        get: false,
        post: false,
        put: false,
        delete: false,
      },
      {
        type: "Encounter",
        get: false,
        post: false,
        put: false,
        delete: false,
      },
      {
        type: "Procedure",
        get: true,
        post: false,
        put: false,
        delete: false,
      },
      {
        type: "MedicationRequest",
        get: true,
        post: false,
        put: false,
        delete: false,
      },
      {
        type: "MedicationStatement",
        get: true,
        post: false,
        put: false,
        delete: false,
      },
    ],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "api_introduction",
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
