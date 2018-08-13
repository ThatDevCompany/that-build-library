import { echo } from './echo'

describe('echo', () => {
	it('should be a function', () => {
		expect(typeof echo).toEqual('function')
	})
})
