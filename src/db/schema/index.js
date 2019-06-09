import { properties as Worry } from './worries';
import { properties as Response } from './responses';

const Realm = require('realm');

const WorrySchema = {
  name: 'Worry',
  primaryKey: 'id',
  properties: Worry,
};

const ResponseSchema = {
  name: 'Response',
  primaryKey: 'id',
  properties: Response,
};

export default new Realm({
  schemaVersion: 1,
  schema: [
    WorrySchema,
    ResponseSchema,
  ],
  migration: () => {},
});
