export const properties = {
  id: 'string',
  resourceType: 'string',
  identifier: 'string?[]',
  questionnaire: 'string',
  status: 'string',
  subject: 'string?[]',
  author: 'string?[]',
  item: 'string?[]',
  fullScore: 'int',
  synced: {
    default: false,
    type: 'bool',
  },
  syncEnabled: {
    default: false,
    type: 'bool',
  },
  authored: {
    type: 'date',
    default: new Date(),
  },
  createdAt: 'date',
  updatedAt: 'date',
};

export default {
  properties
};
