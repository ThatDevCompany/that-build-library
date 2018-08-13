import { BuildUtils } from './index'
import * as _ from 'lodash'

const Original = _.defaults({}, BuildUtils)
const trueSpy = jasmine.createSpy().and.returnValue(true)
const falseSpy = jasmine.createSpy().and.returnValue(false)
const isDirTrueSpy = jasmine.createSpy().and.returnValue({
	isDirectory() {
		return true
	}
})
const isDirFalseSpy = jasmine.createSpy().and.returnValue({
	isDirectory() {
		return false
	}
})
const dirlistSpy = jasmine.createSpy().and.returnValue(['childa', 'childb'])
const resolveSpy = jasmine.createSpy().and.returnValue(Promise.resolve())
const rejectSpy = jasmine.createSpy().and.returnValue(Promise.reject('error'))

describe('utils.tools', () => {
	beforeEach(() => {
		_.assign(BuildUtils, Original)
		BuildUtils.fs = {}
		BuildUtils.spawn = null
		BuildUtils.del = null
	})

	it('should be an object', () => {
		expect(typeof BuildUtils).toBe('object')
	})

	it('should CLEAN', done => {
		resolveSpy.calls.reset()
		BuildUtils.del = resolveSpy
		BuildUtils.clean('/dummy').then(() => {
			expect(BuildUtils.del.calls.all().length).toBe(1)
			done()
		})
	})

	it('should throw CLEAN ERROR an error occurs during deletion', done => {
		rejectSpy.calls.reset()
		BuildUtils.del = rejectSpy
		BuildUtils.clean('/dummy')
			.then(() => {
				expect(false).toBeTruthy()
				done()
			})
			.catch(() => {
				expect(BuildUtils.del.calls.all().length).toBe(1)
				done()
			})
	})

	it('should npmPublish without a package processor', done => {
		trueSpy.calls.reset()
		resolveSpy.calls.reset()
		BuildUtils.updatePackage = jasmine
			.createSpy()
			.and.returnValue(Promise.resolve({ version: '0.1.2' }))
		BuildUtils.exec = resolveSpy
		BuildUtils.clean = resolveSpy
		BuildUtils.npmPublish('topath')
			.then(() => {
				expect(resolveSpy.calls.all().length).toBe(2)
				done()
			})
			.catch(err => {
				console.error(err)
				expect(false).toBeTruthy()
				done()
			})
	})

	it('should updatePackage', done => {
		trueSpy.calls.reset()
		BuildUtils.fs.readFileSync = jasmine
			.createSpy()
			.and.returnValue('{ "version": "0.1.2" }')
		BuildUtils.fs.writeFileSync = trueSpy
		BuildUtils.updatePackage()
			.then((data: any) => {
				expect(trueSpy.calls.all().length).toBe(1)
				expect(data).toBeDefined()
				expect(data.version).toBe('0.1.3')
				done()
			})
			.catch(() => {
				expect(false).toBeTruthy()
				done()
			})
	})

	it('should tsc', () => {
		trueSpy.calls.reset()
		BuildUtils.exec = trueSpy
		BuildUtils.tsc('config').then(() => {
			expect(trueSpy.calls.all().length).toBe(1)
			expect(trueSpy.calls.mostRecent().args.length).toBe(2)
			expect(trueSpy.calls.mostRecent().args[0]).toBe('tsc')
			expect(trueSpy.calls.mostRecent().args[1][0]).toBe('-p')
			expect(trueSpy.calls.mostRecent().args[1][1]).toBe('config')
		})
	})

	it('should exec correctly', done => {
		BuildUtils.spawn = jasmine.createSpy().and.returnValue({
			stdout: {
				on: (x, y) => {
					setTimeout(() => {
						y('data')
					}, 500)
				}
			},
			stderr: {
				on: (x, y) => {
					setTimeout(() => {
						y('data')
					}, 600)
				}
			},
			on: (x, y) => {
				setTimeout(() => {
					y(0)
				}, 1000)
			}
		})
		BuildUtils.exec('cmd', ['a', 'b'])
			.then(() => {
				done()
			})
			.catch(() => {
				expect(false).toBeTruthy()
				done()
			})
	})

	it('should exec incorrectly', done => {
		BuildUtils.spawn = jasmine.createSpy().and.returnValue({
			stdout: {
				on: (x, y) => {
					setTimeout(() => {
						y('data')
					}, 500)
				}
			},
			stderr: {
				on: (x, y) => {
					setTimeout(() => {
						y('data')
					}, 600)
				}
			},
			on: (x, y) => {
				setTimeout(() => {
					y(1)
				}, 1000)
			}
		})
		BuildUtils.exec('cmd', ['a', 'b'])
			.then(() => {
				expect(false).toBeTruthy()
				done()
			})
			.catch(() => {
				done()
			})
	})
})
