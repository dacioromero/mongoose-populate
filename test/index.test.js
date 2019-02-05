const sinon = require('sinon')
const bind = require('lodash.bind');
const populate = require('../index')

// https://github.com/vikpe/mongoose-middleware-test
describe('Helper', () => {
    it('should call this.populate then next', () => {
        const field = 'test';
        const model = {
            populate: sinon.spy()
        }
        const boundHelper = bind(populate(field), model);
        const next = sinon.spy();

        boundHelper(next);

        sinon.assert.calledOnce(model.populate);
        sinon.assert.calledWith(model.populate, field);
        sinon.assert.calledOnce(next);
    });
});
