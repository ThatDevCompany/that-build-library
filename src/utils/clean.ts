import * as fs from 'fs'
import * as del from 'del'

/**
 * Clean a folder (remove its contents)
 */
export async function clean(fld: string, leaveRoot: boolean = false) {
	if (!leaveRoot) {
		await del([fld])
	} else {
		const promises = []
		fs.readdirSync(fld).forEach(child => {
			promises.push(del(fld + '/' + child))
		})
		return Promise.all(promises)
	}
}
