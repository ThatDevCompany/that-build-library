import { prettierJS, prettierTS } from './prettier'

describe('prettierJS', () => {
	it('should be a function', () => {
		expect(typeof prettierJS).toEqual('function')
	})
})

describe('prettierTS', () => {
	it('should be a function', () => {
		expect(typeof prettierTS).toEqual('function')
	})
})
