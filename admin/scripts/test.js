import { BuildUtils } from '../../src'

export default Promise.resolve()
	.then(() => BuildUtils.echo('BUILDING TESTS'))
	.then(() => BuildUtils.tsc('tsconfig.json'))

	.then(() => BuildUtils.echo('RUNNING TESTS'))
	.then(() => BuildUtils.test(10, 'src', ['src/index.js']))

	.catch(console.error)
