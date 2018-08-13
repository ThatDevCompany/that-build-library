import { spawn } from 'child_process'
import { exec } from "./exec";

/**
 * Execute a CMD line process
 */
export async function test(minCoverage: string = '80', include: string = 'src', excludes: Array<string> = []) {
	// prettier-ignore
	return exec('nyc', [
		'--reporter', 'html',
		'--reporter', 'text',
		'--reporter', 'lcov',
		'--all', 'true',
		'--check-coverage',
		'--lines', minCoverage,
		'--per-file',
		'--report-dir', './coverage',
		'--temp-directory', './coverage/tmp',
		'--exclude', ...excludes
			.concat([include + '/*.spec.*',include + '/**/*.spec.*'])
			.join(' --exclude ').split(' '),
		'--include', include + '/*',
		'--include', include + '/**/*',
		'node_modules/.bin/jasmine',
		include + '/*.spec.js',
		include + '/**/*.spec.js',
		include + '/**/**/*.spec.js'
	])
}
