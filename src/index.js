// https://stackoverflow.com/a/30052105/10336544
module.exports = field => function populateField(next) {
  this.populate(field);
  next();
};
