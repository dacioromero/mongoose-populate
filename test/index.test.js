import sinon from 'sinon';
import populate from '../src';

// https://github.com/vikpe/mongoose-middleware-test
describe('Helper', () => {
  it('should call this.populate, next', () => {
    const model = { populate: sinon.spy() };

    const field = 'test';
    const boundHelper = populate(field).bind(model);
    const next = sinon.spy();

    boundHelper(next);

    sinon.assert.calledOnce(model.populate);
    sinon.assert.calledWith(model.populate, field);
    sinon.assert.calledOnce(next);
  });
});
