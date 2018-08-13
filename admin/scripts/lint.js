import { BuildUtils } from '../../src'

export default Promise.resolve()
	.then(() => BuildUtils.echo('Prettiering SRC Typescript'))
	.then(() => BuildUtils.prettierTS())

	.then(() => BuildUtils.echo('Prettiering SRC Javascript'))
	.then(() => BuildUtils.prettierJS())

	.then(() => BuildUtils.echo('Prettiering Admin Scripts'))
	.then(() => BuildUtils.prettierJS('admin'))

	.catch(console.error)
