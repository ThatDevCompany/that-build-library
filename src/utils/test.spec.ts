import { testJS, testTS } from './test'

describe('testJS', () => {
	it('should be a function', () => {
		expect(typeof testJS).toEqual('function')
	})
})

describe('testTS', () => {
	it('should be a function', () => {
		expect(typeof testTS).toEqual('function')
	})
})
