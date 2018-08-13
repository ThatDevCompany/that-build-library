import { spawn } from 'child_process'

/**
 * Execute a CMD line process
 */
export async function exec(cmd: string, args: Array<string> = []) {
	const response = []
	return new Promise((resolve, reject) => {
		const exe = spawn(cmd, args)
		exe.stdout.on('data', data => {
			response.push(data.toString())
			console.log(data.toString())
		})
		exe.stderr.on('data', data => {
			console.error(data.toString())
		})
		exe.on('exit', code => {
			if (code === 0) {
				return resolve(response)
			} else {
				console.error('Problem executing ' + cmd)
				return reject()
			}
		})
	})
}
