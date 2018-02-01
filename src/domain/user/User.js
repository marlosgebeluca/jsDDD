const { attributes } = require('structure');

const User = attributes({
  id: Number,
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    greater: 21,
    max: 100
  }
})(class User {
  isLegal() {
    return this.age >= User.MIN_LEGAL_AGE;
  }
});

User.MIN_LEGAL_AGE = 21;

module.exports = User;
