import { BuildUtils } from '../../src/build';
import Lint from './lint';
import Test from './test';
import Build from './build';

export default Promise.resolve()
	.then(() => Lint)
	.then(() => Test)
	.then(() => Build)
	.then(() => BuildUtils.echo('PUBLISHING TO NPM'))
	.then(() => BuildUtils.npmPublish('dist', (pkg) => {
		delete pkg.scripts;
	}));

