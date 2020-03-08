import { createPopulateHook } from '.';

// https://github.com/vikpe/mongoose-middleware-test
describe('Helper', () => {
  it('should call this.populate and next', () => {
    const query = { populate: jest.fn() };

    const field = 'test';
    const next = jest.fn();

    createPopulateHook(field).call(query, next, [])

    expect(query.populate.mock.calls.length).toBe(1);
    expect(query.populate.mock.calls[0][0]).toBe(field);
    expect(next.mock.calls.length).toBe(1);
  });
});
