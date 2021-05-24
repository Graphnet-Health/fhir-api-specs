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
              Immunization: ["api/apiImmunization"],
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
