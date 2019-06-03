import I18n from 'react-native-i18n';
import en from '@src/translations/en';
import no from '@src/translations/no';

I18n.fallbacks = true;
I18n.translations = { en, no };

export const strings = (name, params = {}) => I18n.t(name, params);

export default I18n;
