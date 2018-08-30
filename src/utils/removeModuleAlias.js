'use strict'
var __awaiter =
	(this && this.__awaiter) ||
	function(thisArg, _arguments, P, generator) {
		return new (P || (P = Promise))(function(resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value))
				} catch (e) {
					reject(e)
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value))
				} catch (e) {
					reject(e)
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: new P(function(resolve) {
							resolve(result.value)
					  }).then(fulfilled, rejected)
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next())
		})
	}
Object.defineProperty(exports, '__esModule', { value: true })
const fs = require('fs')
/**
 * Remove Module Alias
 */
function removeModuleAlias(moduleName, folder, replacement = './') {
	return __awaiter(this, void 0, void 0, function*() {
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
	})
}
exports.removeModuleAlias = removeModuleAlias
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlTW9kdWxlQWxpYXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZW1vdmVNb2R1bGVBbGlhcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUJBQXdCO0FBRXhCOztHQUVHO0FBQ0gsMkJBQ0MsVUFBa0IsRUFDbEIsTUFBYyxFQUNkLGNBQXNCLElBQUk7O1FBRTFCLEVBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUNwRCxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsTUFBTSxHQUFHLEdBQUcsR0FBRyxLQUFLLEVBQUUsS0FBSyxHQUFHLFdBQVcsQ0FBQyxDQUFBO2FBQ3hFO2lCQUFNO2dCQUNOLEVBQUUsQ0FBQyxhQUFhLENBQ2YsTUFBTSxHQUFHLEdBQUcsR0FBRyxLQUFLLEVBQ3BCLEVBQUU7cUJBQ0EsWUFBWSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsS0FBSyxFQUFFLE1BQU0sQ0FBQztxQkFDMUMsS0FBSyxDQUFDLFlBQVksVUFBVSxHQUFHLENBQUM7cUJBQ2hDLElBQUksQ0FBQyxZQUFZLFdBQVcsRUFBRSxDQUFDO3FCQUMvQixLQUFLLENBQUMsZ0JBQWdCLENBQUM7cUJBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUM7cUJBQ3BCLEtBQUssQ0FBQyxZQUFZLFVBQVUsR0FBRyxDQUFDO3FCQUNoQyxJQUFJLENBQUMsWUFBWSxXQUFXLEVBQUUsQ0FBQztxQkFDL0IsS0FBSyxDQUFDLGdCQUFnQixDQUFDO3FCQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDO3FCQUNwQixLQUFLLENBQUMsU0FBUyxVQUFVLEdBQUcsQ0FBQztxQkFDN0IsSUFBSSxDQUFDLFNBQVMsV0FBVyxFQUFFLENBQUM7cUJBQzVCLEtBQUssQ0FBQyxhQUFhLENBQUM7cUJBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUM7cUJBQ2pCLEtBQUssQ0FBQyxZQUFZLFVBQVUsR0FBRyxDQUFDO3FCQUNoQyxJQUFJLENBQUMsWUFBWSxXQUFXLEVBQUUsQ0FBQztxQkFDL0IsS0FBSyxDQUFDLGdCQUFnQixDQUFDO3FCQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLENBQ3RCLENBQUE7YUFDRDtRQUNGLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDekIsQ0FBQztDQUFBO0FBakNELDhDQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJ1xuXG4vKipcbiAqIFJlbW92ZSBNb2R1bGUgQWxpYXNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZU1vZHVsZUFsaWFzKFxuXHRtb2R1bGVOYW1lOiBzdHJpbmcsXG5cdGZvbGRlcjogc3RyaW5nLFxuXHRyZXBsYWNlbWVudDogc3RyaW5nID0gJy4vJ1xuKSB7XG5cdGZzLnJlYWRkaXJTeW5jKGZvbGRlcikuZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0aWYgKGZzLnN0YXRTeW5jKGZvbGRlciArICcvJyArIGNoaWxkKS5pc0RpcmVjdG9yeSgpKSB7XG5cdFx0XHRyZW1vdmVNb2R1bGVBbGlhcyhtb2R1bGVOYW1lLCBmb2xkZXIgKyAnLycgKyBjaGlsZCwgJy4vLicgKyByZXBsYWNlbWVudClcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhcblx0XHRcdFx0Zm9sZGVyICsgJy8nICsgY2hpbGQsXG5cdFx0XHRcdGZzXG5cdFx0XHRcdFx0LnJlYWRGaWxlU3luYyhmb2xkZXIgKyAnLycgKyBjaGlsZCwgJ3V0ZjgnKVxuXHRcdFx0XHRcdC5zcGxpdChgcmVxdWlyZShcIiR7bW9kdWxlTmFtZX0vYClcblx0XHRcdFx0XHQuam9pbihgcmVxdWlyZShcIiR7cmVwbGFjZW1lbnR9YClcblx0XHRcdFx0XHQuc3BsaXQoYHJlcXVpcmUoXCIuLy4uL2ApXG5cdFx0XHRcdFx0LmpvaW4oYHJlcXVpcmUoXCIuLi9gKVxuXHRcdFx0XHRcdC5zcGxpdChgcmVxdWlyZSgnJHttb2R1bGVOYW1lfS9gKVxuXHRcdFx0XHRcdC5qb2luKGByZXF1aXJlKCcke3JlcGxhY2VtZW50fWApXG5cdFx0XHRcdFx0LnNwbGl0KGByZXF1aXJlKCcuLy4uL2ApXG5cdFx0XHRcdFx0LmpvaW4oYHJlcXVpcmUoJy4uL2ApXG5cdFx0XHRcdFx0LnNwbGl0KGBmcm9tICcke21vZHVsZU5hbWV9L2ApXG5cdFx0XHRcdFx0LmpvaW4oYGZyb20gJyR7cmVwbGFjZW1lbnR9YClcblx0XHRcdFx0XHQuc3BsaXQoYGZyb20gJy4vLi4vYClcblx0XHRcdFx0XHQuam9pbihgZnJvbSAnLi4vYClcblx0XHRcdFx0XHQuc3BsaXQoYG1vZHVsZVwiOlwiJHttb2R1bGVOYW1lfS9gKVxuXHRcdFx0XHRcdC5qb2luKGBtb2R1bGVcIjpcIiR7cmVwbGFjZW1lbnR9YClcblx0XHRcdFx0XHQuc3BsaXQoYG1vZHVsZVwiOlwiLi8uLi9gKVxuXHRcdFx0XHRcdC5qb2luKGBtb2R1bGVcIjpcIi4uL2ApXG5cdFx0XHQpXG5cdFx0fVxuXHR9KVxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbn1cbiJdfQ==
