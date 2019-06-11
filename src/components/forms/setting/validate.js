import { strings } from '@src/i18n';

export default (values) => {
  const errors = {};

  if (!values.language) {
    errors.language = strings('errors.blank');
  }

  return errors;
};
