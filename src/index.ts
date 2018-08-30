import { clean } from './utils/clean'
import { copy } from './utils/copy'
import { echo } from './utils/echo'
import { exec } from './utils/exec'
import { publish } from './utils/publish'
import { prettierJS, prettierTS } from './utils/prettier'
import { removeModuleAlias } from './utils/removeModuleAlias'
import { testJS, testTS } from './utils/test'
import { tsc } from './utils/tsc'
import { processPackage } from './utils/processPackage'
import { zip } from './utils/zip'

export const BuildUtils = {
	clean: clean,
	copy: copy,
	echo: echo,
	exec: exec,
	publish: publish,
	prettierJS: prettierJS,
	prettierTS: prettierTS,
	removeModuleAlias: removeModuleAlias,
	testJS: testJS,
	testTS: testTS,
	tsc: tsc,
	processPackage: processPackage,
	zip: zip
}
