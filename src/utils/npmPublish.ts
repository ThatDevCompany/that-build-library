import * as fs from 'fs'
import { updatePackage } from './updatePackage'
import { clean } from './clean'
import { exec } from './exec'

/**
 * NPM Publish
 */
export async function npmPublish(
	fld: string,
	processPackage: (pkg) => void = pkg => {}
) {
	// Update the package.json
	return (
		updatePackage((pkg: any) => {
			// Process the contents
			processPackage(pkg)
			delete pkg.devDependencies

			// Save package.json
			fs.writeFileSync(fld + '/package.json', JSON.stringify(pkg, null, 4))
		})
			// Delete the tests
			.then(() => clean(fld + '/*.spec.*'))

			// Run the publish
			.then(() => exec('npm', ['publish', 'dist']))
	)
}
