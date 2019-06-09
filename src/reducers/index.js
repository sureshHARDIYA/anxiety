import { reducer as formReducer } from 'redux-form';
import quiz from './quiz';
import worry from './worry';

export default {
  quiz,
  worry,
  form: formReducer,
};
