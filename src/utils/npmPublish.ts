import * as fs from 'fs'
import { processPackage } from './processPackage'
import { clean } from './clean'
import { exec } from './exec'

/**
 * NPM Publish
 */
export async function npmPublish(
	fld: string,
	process: (pkg) => void = pkg => {}
) {
	// Update the package.json
	await processPackage((pkg: any) => {
		// Process the contents
		process(pkg)
		delete pkg.devDependencies

		// Save package.json
		fs.writeFileSync(fld + '/package.json', JSON.stringify(pkg, null, 4))
	}, true)

	// Delete the tests
	await clean(fld + '/*.spec.*')

	// Run the publish
	await exec('npm', ['publish', 'dist'])

	return Promise.resolve()
}
