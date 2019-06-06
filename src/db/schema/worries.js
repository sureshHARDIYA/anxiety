export const properties = {
  id: 'int',
  title: 'string',
  status: {
    type: 'bool',
    default: false,
  },
  content: {
    default: '',
    type: 'string',
  },
  scheduled: 'date',
  createdAt: 'date',
  updatedAt: 'date',
};

export default {
  properties
};
