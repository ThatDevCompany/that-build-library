import * as fs from 'fs'
import { processPackage } from './processPackage'
import { clean } from './clean'
import { exec } from './exec'

/**
 * NPM Publish
 */
export async function publish(
	fld: string,
	process: (pkg) => void = pkg => {},
	packageManager: string = 'yarn'
) {
	// Update the package.json
	let newPkg: any = await processPackage((pkg: any) => {
		// Process the contents
		process(pkg)
		delete pkg.devDependencies

		// Save package.json
		fs.writeFileSync(fld + '/package.json', JSON.stringify(pkg, null, 4))
	}, true)

	// Delete the tests
	await clean(fld + '/*.spec.*')

	// Run the publish
	await exec(packageManager, [
		'publish',
		'--new-version',
		newPkg.version,
		'dist'
	])

	return Promise.resolve()
}
