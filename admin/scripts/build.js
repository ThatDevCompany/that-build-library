import { BuildUtils } from '../../src';

export default Promise.resolve()
	.then(() => BuildUtils.echo('CLEANING'))
	.then(() => BuildUtils.clean('dist'))
	
	.then(() => BuildUtils.echo('BUILDING'))
	.then(() => BuildUtils.tsc('tsconfig.prod.json'))
	
	.then(() => BuildUtils.copy('README.md', 'dist'))
	.then(() => BuildUtils.copy('LICENSE', 'dist'));
