import { reducer as formReducer } from 'redux-form';
import app from './app';
import quiz from './quiz';
import worry from './worry';
import setting from './setting';
import navigation from './navigation';
import association from './association';

export default {
  app,
  quiz,
  worry,
  setting,
  navigation,
  association,
  form: formReducer,
};
