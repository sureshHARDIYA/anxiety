import { reducer as formReducer } from 'redux-form/immutable';
import question from './question';

export default {
  question,
  form: formReducer,
};
