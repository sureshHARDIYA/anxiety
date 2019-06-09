const _ = require('lodash');

export const randomIdGenerator = id => id + _.random(999999999999) + _.random(999999999999).toString(36);
