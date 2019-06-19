export const properties = {
  id: 'string',
  resourceId: 'int',
  resourceType: 'string',
  title: 'string',
  body: {
    type: 'string',
    default: '',
  },
  status: {
    type: 'bool',
    default: false,
  },
  scheduled: {
    type: 'date',
    default: new Date(),
  },
  createdAt: 'date',
  updatedAt: 'date',
};

export default {
  properties
};
