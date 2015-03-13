"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var assign = _interopRequire(require("object-assign"));

var Store = {
  get: function get(key) {
    if (typeof this.state.get === "function") {
      return this.state.get(key);
    } else {
      return this.state[key];
    }
  },

  setState: function setState(data) {
    if (typeof this.state.merge === "function") {
      this.state = this.state.merge(data);
    } else {
      this.state = assign({}, this.state, data);
    }
  }
};
exports.Store = Store;
