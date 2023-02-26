module.exports = {
  docs: [
    "api_introduction",
    {
      type: "category",
      label: "Authentication",
      items: [
        "authorisation/authenticate",
        "authorisation/user_auth",
        "authorisation/system_system_auth",
        "authorisation/national_auth",
      ],
    },
  ],
  api: [
    {
      type: "category",
      label: "FHIR APIs",
      items: [
        "api/apiOverview",
        {
          type: "category",
          label: "Resources",
          items: [
            {
              type: "category",
              label: "Patient",
              items: ["api/apiPatient",
                "api/apiLinkedMergedPatient"]

            },
            {
              type: "category",
              label: "Observation",
              items: [
                "api/apiObservation",
                //"api/apiObservationPOST",
                //"api/apiObservationPUT",
                //"api/apiObservationDELETE",
              ]
            },
            {
              type: "category",
              label: "AllergyIntolerance",
              items: [
                "api/apiAllergyIntolerance",
                //"api/apiAllergyIntolerancePOST",
                //"api/apiAllergyIntolerancePUT",
                //"api/apiAllergyIntoleranceDELETE",
              ]
            },
            {
              type: "category",
              label: "Medications",
              items: [
                //"api/apiMedicationOverview",
                "api/apiMedicationStatement",
                "api/apiMedicationRequest",
                "api/apiMedicationUseCases",
              ]
            },
            {
              type: "category",
              label: "Condition",
              items: [
                "api/apiCondition",
              ]
            },
            {
              type: "category",
              label: "Procedure",
              items: [
                "api/apiProcedure",
              ]
            },
            //{
            //type: "category",
            //label: "FamilyMemberHistory",
            //items: ["api/apiFamilyMemberHistory"]
            //},
            //{
            //type: "category",
            //label: "Immunization",
            //items: ["api/apiImmunization"]
            //},
            //{
            //type: "category",
            //label: "QuestionnaireResponse",
            //items: [
            //"api/apiQuestionnaireResponse",
            //"api/apiQuestionnaireResponsePOST",
            //"api/apiQuestionnaireResponsePUT",
            //"api/apiQuestionnaireResponseDELETE",
            //],
            //},
            //{
            //type: "category",
            //label: "Flag",
            //items: [
            //"api/apiFlag",
            //"api/apiFlagPOST",
            //"api/apiFlagPUT",
            //"api/apiFlagDELETE",
            //]
            //},
          ],
        },
      ],
    },
  ],
  examples: [
    {
      type: "category",
      label: "FHIR Examples",
      items: [
        "examples/exampleOverview",
        "examples/examplePatient",
        "examples/exampleObservation-1",
        "examples/exampleAllergy-1",
        "examples/exampleMedicationStatement-1",
        "examples/exampleMedicationRequest-1",
        // "examples/fmh-1",
        // "examples/fmh-2",
        // "examples/exampleQuestionnaireResponse-1",
        // "examples/exampleFlag-1",
      ],
    },
  ],
  trial: [
    {
      type: "category",
      label: "FHIR Profiles",
      items: [
        "profiles/profileOverview",
        {
          type: "category",
          label: "Profiles",
          items: [
            "profiles/AllergyIntolerance",
            // "profiles/Condition",
            // "profiles/Encounter",
            // "profiles/Immunization",
            // "profiles/Medication",
            // "profiles/MedicationStatement",
            // "profiles/MedicationRequest",
            "profiles/Observation",
            // "profiles/Patient",
            // "profiles/Procedure",
            "profiles/QuestionnaireResponse",
            "profiles/Flag",
          ],
        },
        //{
        //type: "category",
        //label: "Extensions",
        //items: [
        // "resources/extLastIssueDate",
        // "resources/extPrescriptionType",
        //],
        //}
      ],
    },
  ],
};
