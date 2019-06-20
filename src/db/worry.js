import moment from 'moment';
import { strings } from '@src/i18n';
import realm from './schema';
import Notification from './notification';

const requireFields = ['title', 'content', 'scheduled'];
const permitFields = ['title', 'status', 'content', 'scheduled', 'createdAt', 'updatedAt'];

class Worry {
  getAll() {
    return new Promise((resolve, reject) => {
      try {
        realm.write(() => resolve(realm.objects('Worry').sorted('id', true)));
      } catch (e) {
        reject(e);
      }
    });
  }

  getId(args = '') {
    return new Promise((resolve, reject) => {
      try {
        realm.write(() => {
          const items = realm.objects('Worry').filtered(args);
          resolve((items || [])[0]);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  createData(params) {
    return new Promise((resolve, reject) => {
      try {
        const permitParams = permitFields.reduce((obj, key) => ([undefined, null].includes(params[key]) ? obj : ({ ...obj, [key]: params[key] })), {});

        const invalid = requireFields
          .filter(key => [undefined, null, ''].includes(permitParams[key]))
          .reduce((obj, key) => ({ ...obj, [key]: 'This field is required' }), {});

        if (Object.keys(invalid).length > 0) {
          throw invalid;
        }

        realm.write(() => {
          const last = (realm.objects('Worry').sorted('id', true) || [])[0] || {};
          permitParams.id = (last.id || 0) + 1;
          permitParams.createdAt = new Date();
          permitParams.updatedAt = new Date();
          const item = realm.create('Worry', permitParams);

          if (item && !item.status) {
            Notification.createData({
              resourceId: item.id,
              resourceType: 'Worry',
              scheduled: item.scheduled,
              body: item.title,
              id: `Worry_Scheduled_${item.id}`,
              title: strings('notifications.worry.scheduled0')
            });
          }

          resolve(item);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  updateData(id, params) {
    return new Promise((resolve, reject) => {
      try {
        const permitParams = permitFields.reduce((obj, key) => ([undefined, null].includes(params[key]) ? obj : ({ ...obj, [key]: params[key] })), { id });
        permitParams.updatedAt = new Date();
        realm.write(() => {
          const oldItem = realm.objects('Worry').filtered(`id = ${id}`)[0];

          if (oldItem && !params.status && params.scheduled !== oldItem.scheduled) {
            Notification.createData({
              resourceId: id,
              resourceType: 'Worry',
              id: `Worry_Scheduled_${id}`,
              scheduled: permitParams.scheduled || oldItem.scheduled,
              body: permitParams.title || oldItem.title,
              title: strings('notifications.worry.scheduled0')
            });
          }

          resolve(realm.create('Worry', permitParams, true));
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  removeData(id) {
    return new Promise((resolve, reject) => {
      try {
        realm.write(() => {
          const item = realm.objects('Worry').filtered(`id = ${id}`);
          resolve(realm.delete(item));
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  reSchedule() {
    return new Promise((resolve, reject) => {
      try {
        realm.write(() => {
          const items = realm.objects('Worry').filtered('status = $0 AND scheduled > $1', false, moment().format());

          resolve(items.map(item => Notification.createData({
            resourceId: item.id,
            resourceType: 'Worry',
            id: `Worry_Scheduled_${item.id}`,
            scheduled: item.scheduled,
            body: item.title,
            title: strings('notifications.worry.scheduled0')
          }, true)));
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default new Worry();
