// import moment from 'moment';
import realm from './schema';

const requireFields = ['title', 'content'];
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
          resolve(realm.create('Worry', permitParams));
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
        realm.write(() => resolve(realm.create('Worry', permitParams, true)));
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
}

export default new Worry();
