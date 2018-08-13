/**
 * Echo a message to the console
 */
export async function echo(message: string) {
	console.log('----------------')
	console.log(message)
	console.log('----------------')
	return Promise.resolve()
}
