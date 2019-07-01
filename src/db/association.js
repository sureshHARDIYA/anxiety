// import moment from 'moment';
import realm from './schema';

const requireFields = ['subject', 'items'];
const permitFields = [...requireFields, 'createdAt', 'updatedAt'];

class Association {
  getAll() {
    return new Promise((resolve, reject) => {
      try {
        realm.write(() => resolve(realm.objects('Association').sorted('createdAt', true)));
      } catch (e) {
        reject(e);
      }
    });
  }

  getId(args = '') {
    return new Promise((resolve, reject) => {
      try {
        realm.write(() => {
          const items = realm.objects('Association').filtered(args);
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
          const last = (realm.objects('Association').sorted('id', true) || [])[0] || {};
          permitParams.id = (last.id || 0) + 1;
          permitParams.items = JSON.stringify(permitParams.items);
          permitParams.createdAt = new Date();
          permitParams.updatedAt = new Date();
          resolve(realm.create('Association', permitParams));
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
        realm.write(() => resolve(realm.create('Association', permitParams, true)));
      } catch (e) {
        reject(e);
      }
    });
  }

  removeData(id) {
    return new Promise((resolve, reject) => {
      try {
        realm.write(() => {
          const item = realm.objects('Association').filtered(`id = '${id}'`);
          resolve(realm.delete(item));
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default new Association();
