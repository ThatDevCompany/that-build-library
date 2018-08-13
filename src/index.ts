import { clean } from './utils/clean'
import { copy } from './utils/copy'
import { echo } from './utils/echo'
import { exec } from './utils/exec'
import { npmPublish } from './utils/npmPublish'
import { prettierJS, prettierTS } from './utils/prettier'
import { removeModuleAlias } from './utils/removeModuleAlias'
import { tsc } from './utils/tsc'
import { updatePackage } from './utils/updatePackage'
import { zip } from './utils/zip'

export const BuildUtils = {
	clean: clean,
	copy: copy,
	echo: echo,
	exec: exec,
	npmPublish: npmPublish,
	prettierJS: prettierJS,
	prettierTS: prettierTS,
	removeModuleAlias: removeModuleAlias,
	tsc: tsc,
	updatePackage: updatePackage,
	zip: zip
}
