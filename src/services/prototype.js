/* eslint-disable */

Object.defineProperty(Array.prototype, 'random', {
  value: function() {
    return this.sort(() => Math.random() - 0.5);
  },
});
