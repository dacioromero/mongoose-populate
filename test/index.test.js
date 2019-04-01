import populate from '../src';

// https://github.com/vikpe/mongoose-middleware-test
describe('Helper', () => {
  it('should call this.populate, next', () => {
    const model = { populate: jest.fn() };

    const field = 'test';
    const boundHelper = populate(field).bind(model);
    const next = jest.fn();

    boundHelper(next);

    expect(model.populate.mock.calls.length).toBe(1);
    expect(model.populate.mock.calls[0][0]).toBe(field);
    expect(model.populate.mock.calls.length).toBe(1);
  });
});
