// import moment from 'moment';
import realm from './schema';

const requireFields = ['id', 'resourceType', 'identifier', 'questionnaire', 'status', 'subject', 'author', 'item', 'fullScore', 'synced', 'syncEnabled', 'authored'];
const permitFields = [...requireFields, 'createdAt', 'updatedAt'];

class Response {
  getAll() {
    return new Promise((resolve, reject) => {
      try {
        realm.write(() => resolve(realm.objects('Response').sorted('authored', true)));
      } catch (e) {
        reject(e);
      }
    });
  }

  getId(args = '') {
    return new Promise((resolve, reject) => {
      try {
        realm.write(() => {
          const items = realm.objects('Response').filtered(args);
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
          permitParams.item = permitParams.item.map(s => JSON.stringify(s));
          permitParams.identifier = permitParams.identifier.map(s => JSON.stringify(s));
          permitParams.createdAt = new Date();
          permitParams.updatedAt = new Date();
          resolve(realm.create('Response', permitParams));
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
        realm.write(() => resolve(realm.create('Response', permitParams, true)));
      } catch (e) {
        reject(e);
      }
    });
  }

  removeData(id) {
    return new Promise((resolve, reject) => {
      try {
        realm.write(() => {
          const item = realm.objects('Response').filtered(`id = ${id}`);
          resolve(realm.delete(item));
        });
      } catch (e) {
        reject(e);
      }
    });
  }
}

export default new Response();
