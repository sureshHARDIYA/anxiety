// import moment from 'moment';
import NotificationService from '@src/services/notification';
import realm from './schema';

const requireFields = ['resourceId', 'resourceType', 'title', 'body'];
const permitFields = [...requireFields, 'createdAt', 'updatedAt'];

class Notification {
  constructor() {
    this.notif = new NotificationService(this.onRegister, this.onNotif);
  }

  onNotif = () => {};

  onRegister = () => {};

  getAll() {
    return new Promise((resolve, reject) => {
      try {
        realm.write(() => resolve(realm.objects('Notification').sorted('authored', true)));
      } catch (e) {
        reject(e);
      }
    });
  }

  updateBadge() {
    this.notif.setBadge(realm.objects('Notification').filtered('status = true').length);
  }

  getId(args = '') {
    return new Promise((resolve, reject) => {
      try {
        realm.write(() => {
          const items = realm.objects('Notification').filtered(args);
          resolve((items || [])[0]);
        });
      } catch (e) {
        reject(e);
      }
    });
  }

  createData(params, write = true) {
    return new Promise((resolve, reject) => {
      try {
        const permitParams = permitFields.reduce((obj, key) => ([undefined, null].includes(params[key]) ? obj : ({ ...obj, [key]: params[key] })), {});

        const invalid = requireFields
          .filter(key => [undefined, null, ''].includes(permitParams[key]))
          .reduce((obj, key) => ({ ...obj, [key]: 'This field is required' }), {});

        if (Object.keys(invalid).length > 0) {
          throw invalid;
        }

        const transaction = () => {
          const last = (realm.objects('Notification').sorted('id', true) || [])[0] || {};
          permitParams.id = (last.id || 0) + 1;

          permitParams.createdAt = new Date();
          permitParams.updatedAt = new Date();
          const item = realm.create('Notification', permitParams);
          this.updateBadge();
          this.notif.localNotif(item);
          return item;
        };

        if (write) {
          resolve(transaction());
        } else {
          realm.write(() => {
            resolve(transaction());
          });
        }
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
        realm.write(() => resolve(realm.create('Notification', permitParams, true)));
      } catch (e) {
        reject(e);
      }
    });
  }

  removeData(id) {
    return new Promise((resolve, reject) => {
      try {
        realm.write(() => {
          const item = realm.objects('Notification').filtered(`id = '${id}'`);
          resolve(realm.delete(item));
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default new Notification();
