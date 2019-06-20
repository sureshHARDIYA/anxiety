import moment from 'moment';
import { AsyncStorage } from 'react-native';
import { strings } from '@src/i18n';
import NotificationService from '@src/services/notification';
import realm from './schema';

const requireFields = ['id', 'resourceId', 'resourceType', 'title', 'body', 'scheduled'];
const permitFields = [...requireFields, 'status', 'createdAt', 'updatedAt'];

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

  updateBadge(transaction = true) {
    if (transaction) {
      this.notif.setBadge(realm.objects('Notification').filtered('status = false').length);
    } else {
      realm.write(() => {
        this.notif.setBadge(realm.objects('Notification').filtered('status = false').length);
      });
    }
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

  createData(params) {
    return new Promise(async (resolve, reject) => {
      try {
        const permitParams = permitFields.reduce((obj, key) => ([undefined, null].includes(params[key]) ? obj : ({ ...obj, [key]: params[key] })), {});

        const invalid = requireFields
          .filter(key => [undefined, null, ''].includes(permitParams[key]))
          .reduce((obj, key) => ({ ...obj, [key]: 'This field is required' }), {});

        if (Object.keys(invalid).length > 0) {
          throw invalid;
        }

        const scheduled = JSON.parse((await AsyncStorage.getItem('setting')) || '{}').scheduled || '0';
        permitParams.scheduled = moment(params.scheduled).clone().add(-scheduled, 'minutes').toDate();

        const duration = Math.trunc(moment.duration(moment(permitParams.scheduled).diff(moment())).asMinutes()) || 0;

        realm.write(() => {
          permitParams.createdAt = new Date();
          permitParams.updatedAt = new Date();

          if (`${scheduled}` !== '0') {
            const time = duration < 0 ? (duration + +scheduled) : scheduled;
            if (time < 0) {
              permitParams.title = strings('notifications.worry.scheduled_before', { time: Math.abs(time) });
            } else if (time > 0) {
              permitParams.title = strings('notifications.worry.scheduled', { time });
            }
          }

          const item = realm.create('Notification', permitParams, true);
          this.notif.cancelNotif(item.id);
          this.notif.scheduleNotif(item);
          this.updateBadge();
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
          const item = realm.create('Notification', permitParams, true);
          this.updateBadge();
          resolve(item);
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
