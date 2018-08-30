import { BuildUtils } from '../../src'

export default Promise.resolve()
	.then(() => BuildUtils.echo('BUILDING TESTS'))
	.then(() => BuildUtils.tsc('tsconfig.json'))

	.then(() => BuildUtils.echo('RUNNING TESTS'))
	.then(() => BuildUtils.testJS(10, 'src', ['src/index.js']))

	.catch(e => {
		console.error(e)
		process.exit(1)
	})
