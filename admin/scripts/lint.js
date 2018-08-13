import { BuildUtils } from '../../src'

export default Promise.resolve()
	.then(() => BuildUtils.echo('Prettiering Typescript'))
	.then(() => BuildUtils.prettierTS())
	
	.then(() => BuildUtils.echo('Prettiering Javascript'))
	.then(() => BuildUtils.prettierJS())
	
	.catch(console.error)
