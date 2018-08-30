import { spawn } from 'child_process'

/**
 * Execute a CMD line process
 */
export async function exec(
	cmd: string,
	args: Array<string> = [],
	silent = false
) {
	const response = []
	return new Promise((resolve, reject) => {
		const exe = spawn(cmd, args, {
			env: process.env
		})
		exe.stdout.on('data', data => {
			response.push(data.toString())
			if (!silent) {
				console.log(data.toString())
			}
		})
		exe.stderr.on('data', data => {
			if (!silent) {
				console.error(data.toString())
			}
		})
		exe.on('exit', code => {
			if (code === 0) {
				return resolve(response)
			} else {
				if (!silent) {
					console.error('Problem executing ' + cmd)
				}
				return reject()
			}
		})
	})
}
