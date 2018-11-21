/**
 * PRIVATE Zip Folder
 */
export function zipFolder(zip: any, ffs: any, root: string, dir: string) {
	dir = dir || ''
	let files = ffs.readdirSync(root + (dir ? '/' + dir : ''))
	files.forEach(file => {
		if (['.ts', '.js.map'].some(e => file.endsWith(e))) {
			return
		}
		let stat = ffs.statSync(root + (dir ? '/' + dir : '') + '/' + file)
		if (stat.isFile()) {
			zipFile(zip, ffs, root, dir, file)
		} else if (stat.isDirectory()) {
			zipFolder(zip, ffs, root, dir ? dir + '/' + file : file)
		}
	})
}

/**
 * PRIVATE Zip File
 */
export function zipFile(
	zip: any,
	ffs: any,
	root: string,
	dir: string,
	file: string
) {
	dir = dir || ''
	let zipfolder = dir ? zip.folder(dir) : zip
	const data = ffs.readFileSync(root + (dir ? '/' + dir : '') + '/' + file)
	zipfolder.file(file, data)
}

/**
 * PRIVATE Check Folder
 */
export function checkFolder(ffs: any, fld: string) {
	let fldBits = fld.split('/'),
		mkfld = ''
	fldBits.forEach(toBit => {
		mkfld = mkfld ? mkfld + '/' + toBit : toBit
		if (mkfld && !ffs.existsSync(mkfld)) {
			ffs.mkdirSync(mkfld)
		}
	})
}

/**
 * PRIVATE Copy Folder
 */
export function copyFolder(ffs: any, from: string, to: string) {
	checkFolder(ffs, to)
	let tasks = []
	ffs.readdirSync(from).forEach(child => {
		if (ffs.statSync(from + '/' + child).isDirectory()) {
			copyFolder(ffs, from + '/' + child, to + '/' + child)
		} else {
			copyFile(ffs, from + '/' + child, to + '/' + child)
		}
	})
}

/**
 * PRIVATE COPY File
 */
export function copyFile(ffs: any, from: string, to: string) {
	ffs.copyFileSync(from, to)
}
