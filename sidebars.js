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
          Resources: [
            {
              Patient: ["api/apiPatient"],
              Observation: [
                "api/apiObservation",
                "api/apiObservationPOST",
                "api/apiObservationPUT",
                "api/apiObservationDELETE",
              ],
              AllergyIntolerance: [
                "api/apiAllergyIntolerance",
                "api/apiAllergyIntolerancePOST",
                "api/apiAllergyIntolerancePUT",
                "api/apiAllergyIntoleranceDELETE",
              ],
              FamilyMemberHistory: ["api/apiFamilyMemberHistory"],
              Immunization: ["api/apiImmunization"],
              QuestionnaireResponse: [
                "api/apiQuestionnaireResponse",
                "api/apiQuestionnaireResponsePOST",
                "api/apiQuestionnaireResponsePUT",
                "api/apiQuestionnaireResponseDELETE",
              ],
              Flag: [
                "api/apiFlag",
                "api/apiFlagPOST",
                "api/apiFlagPUT",
                "api/apiFlagDELETE",
              ]
            },
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
        "examples/fmh-1",
        "examples/fmh-2",
        "examples/exampleQuestionnaireResponse-1",
        "examples/exampleFlag-1",
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
          Profiles: [
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
        {
          Extensions: [
            // "resources/extLastIssueDate",
            // "resources/extPrescriptionType",
          ],
        },
      ],
    },
  ],
};
