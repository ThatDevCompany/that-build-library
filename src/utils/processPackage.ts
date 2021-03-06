import * as fs from 'fs'

/**
 * Build Utils
 */
export async function processPackage(
	process?: (pkg: any) => any,
	autoUpdate: boolean = false
) {
	return new Promise((resolve, reject) => {
		try {
			const pkg = JSON.parse(fs.readFileSync('package.json').toString())
			if (autoUpdate) {
				let version = pkg.version.split('.')
				version[2] = parseInt(version[2], 10) + 1
				pkg.version = version.join('.')
				fs.writeFileSync('package.json', JSON.stringify(pkg, null, 4))
			}
			if (process) {
				process(pkg)
			}
			return resolve(pkg)
		} catch (e) {
			console.error('Problem occurred updating package.json version number', e)
			return reject()
		}
	})
}
