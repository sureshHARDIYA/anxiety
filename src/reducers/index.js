import { reducer as formReducer } from 'redux-form';
import app from './app';
import quiz from './quiz';
import worry from './worry';
import setting from './setting';
import navigation from './navigation';

export default {
  app,
  quiz,
  worry,
  setting,
  navigation,
  form: formReducer,
};
