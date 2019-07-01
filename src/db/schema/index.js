import { properties as Worry } from './worries';
import { properties as Setting } from './settings';
import { properties as Response } from './responses';
import { properties as Association } from './associations';
import { properties as Notification } from './notifications';

const Realm = require('realm');

const WorrySchema = {
  name: 'Worry',
  primaryKey: 'id',
  properties: Worry,
};

const SettingSchema = {
  name: 'Setting',
  primaryKey: 'id',
  properties: Setting,
};

const ResponseSchema = {
  name: 'Response',
  primaryKey: 'id',
  properties: Response,
};

const NotificationSchema = {
  name: 'Notification',
  primaryKey: 'id',
  properties: Notification,
};

const AssociationSchema = {
  name: 'Association',
  primaryKey: 'id',
  properties: Association,
};

export default new Realm({
  schemaVersion: 1,
  schema: [
    WorrySchema,
    SettingSchema,
    ResponseSchema,
    AssociationSchema,
    NotificationSchema,
  ],
  migration: () => {},
});
