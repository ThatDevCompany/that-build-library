import { spawn } from 'child_process'
import { exec } from './exec'

/**
 * Test (Javascript)
 */
export async function testJS(
	minCoverage: string = '80',
	include: string = 'src',
	excludes: Array<string> = [],
	testRootFile: string = ''
) {
	// prettier-ignore
	return exec('nyc', [
		'--reporter', 'html',
		'--reporter', 'text',
		'--reporter', 'lcov',
		'--report-dir', './coverage',
		'--temp-directory', './coverage/tmp',
		testRootFile ? '--silent' : '--all',
		testRootFile ? '--skip-empty' : '--check-coverage',
		'--lines', minCoverage,
		'--per-file',
		'--extension', '.js',
		'--exclude', ...excludes
			.concat([include + '/*.spec.js', include + '/**/*.spec.js'])
			.concat([include + '/index.js', include + '/**/index.js'])
			.join(' --exclude ').split(' '),
		'--include', include + '/**',
		'node_modules/.bin/jasmine',
		testRootFile ? testRootFile : include + '/**/*.spec.js'
	])
}

/**
 * Test (Typescript)
 */
export async function testTS(
	minCoverage: string = '80',
	include: string = 'src',
	excludes: Array<string> = [],
	testRootFile: string = ''
) {
	// prettier-ignore
	return exec('nyc', [

		'--reporter', 'html',
		'--reporter', 'text',
		'--reporter', 'lcov',
		'--report-dir', './coverage',
		'--temp-directory', './coverage/tmp',
		testRootFile ? '--silent' : '--all',
		testRootFile ? '--skip-empty' : '--check-coverage',
		'--lines', minCoverage,
		'--per-file',
		'--require', 'tsconfig-paths/register',
		'--require', 'ts-node/register',
		'--extension', '.ts',
		'--exclude', ...excludes
			.concat([include + '/*.spec.ts', include + '/**/*.spec.ts'])
			.concat([include + '/index.ts', include + '/**/index.ts'])
			.join(' --exclude ').split(' '),
		'--include', include + '/**',
		'node_modules/.bin/jasmine',
		testRootFile ? testRootFile : include + '/**/*.spec.ts'
	])
}
