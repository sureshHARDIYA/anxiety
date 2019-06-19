export const properties = {
  id: 'int',
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
  createdAt: 'date',
  updatedAt: 'date',
};

export default {
  properties
};
