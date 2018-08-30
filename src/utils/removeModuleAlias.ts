import * as fs from 'fs'

/**
 * Remove Module Alias
 */
export async function removeModuleAlias(
	moduleName: string,
	folder: string,
	replacement: string = './'
) {
	fs.readdirSync(folder).forEach(child => {
		if (fs.statSync(folder + '/' + child).isDirectory()) {
			removeModuleAlias(moduleName, folder + '/' + child, './.' + replacement)
		} else {
			fs.writeFileSync(
				folder + '/' + child,
				fs
					.readFileSync(folder + '/' + child, 'utf8')
					.split(`require("${moduleName}/`)
					.join(`require("${replacement}`)
					.split(`require("./../`)
					.join(`require("../`)
					.split(`require('${moduleName}/`)
					.join(`require('${replacement}`)
					.split(`require('./../`)
					.join(`require('../`)
					.split(`from '${moduleName}/`)
					.join(`from '${replacement}`)
					.split(`from './../`)
					.join(`from '../`)
					.split(`module":"${moduleName}/`)
					.join(`module":"${replacement}`)
					.split(`module":"./../`)
					.join(`module":"../`)
			)
		}
	})
	return Promise.resolve()
}
