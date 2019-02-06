const sinon = require('sinon');
const sinonTest = require('sinon-test');
const bind = require('lodash.bind');
const populate = require('../src');

const test = sinonTest(sinon);

// https://github.com/vikpe/mongoose-middleware-test
describe('Helper', () => {
  it('should call this.populate, next', test(function helperTest() {
    const model = { populate: this.spy() };

    const field = 'test';
    const boundHelper = bind(populate(field), model);
    const next = this.spy();

    boundHelper(next);

    sinon.assert.calledOnce(model.populate);
    sinon.assert.calledWith(model.populate, field);
    sinon.assert.calledOnce(next);
  }));
});
