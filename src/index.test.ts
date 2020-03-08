import { createPopulateHook } from '.'

// https://github.com/vikpe/mongoose-middleware-test
describe('populate hook', () => {
  it('should call this.populate and next', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const query: any = { populate: jest.fn() }

    const field = 'test'
    const next = jest.fn()

    createPopulateHook(field).call(query, next, [])

    expect(query.populate.mock.calls.length).toBe(1)
    expect(query.populate.mock.calls[0][0]).toBe(field)
    expect(next.mock.calls.length).toBe(1)
  })
})
