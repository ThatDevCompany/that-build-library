import * as fs from 'fs'
import { exec } from './exec'

/**
 * Get Paths
 */
const getPaths = (
	include: string,
	exclude: Array<string>,
	wildcard: string
): Array<string> => {
	let retVal = [include + wildcard]
	fs.readdirSync(include).forEach(child => {
		if (exclude.indexOf(include + '/' + child) < 0) {
			if (fs.statSync(include + '/' + child).isDirectory()) {
				retVal = retVal.concat(
					getPaths(include + '/' + child, exclude, wildcard)
				)
			}
		}
	})
	return retVal
}

/**
 * Prettier
 */
export async function prettierTS(
	include: string = 'src',
	exclude: Array<string> = []
) {
	exec('prettier', [
		'--single-quote',
		'--use-tabs',
		'--write',
		'--semi',
		'false',
		'--arrow-parens',
		'avoid',
		'--print-width',
		'80',
		'--parser',
		'typescript',
		...getPaths(include, exclude, '/*.ts')
	])
}

/**
 * Prettier JS
 */
export async function prettierJS(
	include: string = 'src',
	exclude: Array<string> = []
) {
	exec('prettier', [
		'--single-quote',
		'--use-tabs',
		'--write',
		'--semi',
		'false',
		'--arrow-parens',
		'avoid',
		'--print-width',
		'80',
		...getPaths(include, exclude, '/*.js')
	])
}
