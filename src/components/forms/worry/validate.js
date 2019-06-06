import { strings } from '@src/i18n';

export default (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = strings('errors.blank');
  }

  if (!values.content) {
    errors.content = strings('errors.blank');
  }

  if (!values.scheduled) {
    errors.scheduled = strings('errors.blank');
  }

  return errors;
};
