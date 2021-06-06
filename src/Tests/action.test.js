import { loadUA, loadData } from '../actions/action'

describe('testing actions', () => {
    test('loadUA', (done) => {
        const get = jest.fn()
        const data = {}
        get.mockReturnValue(Promise.resolve({ data }))

        let callNumber = 0
        const dispatch = jest.fn( params => {
            if(callNumber === 0) {
                expect(params).toEqual({ type: 'LOAD_UA_REQUEST' })
            }
            if(callNumber === 1) {
                expect(params).toEqual({ type: 'LOAD_UA_SUCCESS', data: data })
                done()
            }
            callNumber++
        })
        const axiosMock = { get }
        loadUA(axiosMock)(dispatch)
    })
    test('loadData', (done) => {
        const get = jest.fn()
        const data = {}

        get.mockReturnValue(Promise.resolve({ data }))

        let callNumber = 0;
        const dispatch = jest.fn( params => {
            if(callNumber === 0) {
                expect(params).toEqual({ type: 'LOAD_DATA_REQUEST' })
                done()
            }
        })
        const axiosMock = { get }
        loadData(axiosMock)(dispatch)
    })
})