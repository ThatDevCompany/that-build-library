import { exec } from './exec'

/**
 * TSC
 */
export async function tsc(config: string = './tsconfig.json') {
	return exec('tsc', ['-p', config])
}
