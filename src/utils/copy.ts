import * as fs from 'fs'
import { checkFolder, copyFile, copyFolder } from './private'

/**
 * Copy Folder
 */
export async function copy(from: string, to: string, filename: string = '') {
	checkFolder(fs, to)
	if (fs.statSync(from).isDirectory()) {
		return copyFolder(fs, from, to)
	} else {
		return copyFile(
			fs,
			from,
			to + '/' + (filename || from.split('/').reverse()[0])
		)
	}
}
