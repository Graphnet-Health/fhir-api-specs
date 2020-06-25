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
      label: 'trial 1',
      items: ['doc1', 'doc2', 'doc3'],
    },
    {
      type: 'category',
      label: 'trial 2',
      items: [
        'doc1',
        'doc2',
        {
          Resources: ['doc2', 'doc3'],
        },
        {
          Extensions: ['doc2', 'doc3'],
        },
        'doc3'],
    },
  ],
};
