import * as fs from 'fs'
import * as nodezip from 'node-zip'
import { zipFolder } from './private'

/**
 * Build Utils
 */
export async function zip(from: string, to: string) {
	return new Promise((resolve, reject) => {
		if (fs.existsSync(to)) {
			fs.unlinkSync(to)
		}
		zipFolder(nodezip, fs, from, '')
		fs.writeFile(
			to,
			nodezip.generate({ base64: false, compression: 'DEFLATE' }),
			'binary',
			err => {
				if (err) {
					reject(err)
				} else {
					resolve()
				}
			}
		)
	})
}
