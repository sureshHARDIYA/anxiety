import { properties as Worry } from './worries';

const Realm = require('realm');

const WorrySchema = {
  name: 'Worry',
  primaryKey: 'id',
  properties: Worry,
};

export default new Realm({
  schemaVersion: 1,
  schema: [
    WorrySchema,
  ],
  migration: () => {},
});
