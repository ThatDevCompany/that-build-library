import { npmPublish } from './npmPublish'

describe('npmPublish', () => {
	it('should be a function', () => {
		expect(typeof npmPublish).toEqual('function')
	})
})
