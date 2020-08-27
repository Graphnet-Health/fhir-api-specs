module.exports = {
  docs: [
    'api_introduction',
    {
      type: 'category',
      label: 'Authentication',
      items: [
        'authorisation/authenticate', 
        'authorisation/user_auth', 
        'authorisation/system_system_auth',
        'authorisation/national_auth'],
    },
    'fhir_apis',
    'cc_apis',
    'cc_data_sub_apis'
  ],

  trial: [
    {
      type: 'category',
      label: 'FHIR Resources',
      items: [
        'resources/profileOverview',
        {
          Resources: [
            'resources/medication', 
            'resources/medicationStatement', 
            'resources/medicationRequest',
            'resources/patient'
          ],
        },
        {
          Extensions: [
            'resources/extLastIssueDate', 
            'resources/extPrescriptionType'],
        }],
    },
  ],
};
