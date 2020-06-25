module.exports = {
  docs: [
    {
      type: 'category',
      label: 'category 1',
      items: ['doc4', 'testing/doc5', 'doc3'],
    },
    {
      type: 'category',
      label: 'category 2',
      items: ['doc1', 'doc2', 'doc3'],
    },
  ],
  test: [
    {
      type: 'category',
      label: 'test 1',
      items: ['doc1', 'doc2', 'doc3'],
    },
    {
      type: 'category',
      label: 'test 2',
      items: ['doc1', 'doc2', 'doc3'],
    },
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
        },
        'doc3'],
    },
  ],
};
