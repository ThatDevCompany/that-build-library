import { BuildUtils } from '../../src'
import Lint from './lint'
import Test from './test'
import Build from './build'

export default Promise.resolve()
	.then(() => Lint)
	.then(() => Test)
	.then(() => Build)
	.then(() => BuildUtils.echo('PUBLISHING'))
	.then(() =>
		BuildUtils.publish('dist', pkg => {
			delete pkg.scripts
		})
	)
