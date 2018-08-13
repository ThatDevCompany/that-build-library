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
const exec_1 = require('./exec')
/**
 * Get Paths
 */
const getPaths = (include, exclude, wildcard) => {
	let retVal = [include + wildcard]
	fs.readdirSync(include).forEach(child => {
		if (exclude.indexOf(include + '/' + child) < 0) {
			if (fs.statSync(include + '/' + child).isDirectory()) {
				retVal = retVal.concat(
					getPaths(include + '/' + child, exclude, wildcard)
				)
			}
		}
	})
	return retVal
}
/**
 * Prettier
 */
function prettierTS(include = 'src', exclude = []) {
	return __awaiter(this, void 0, void 0, function*() {
		exec_1.exec('prettier', [
			'--single-quote',
			'--use-tabs',
			'--write',
			'--semi',
			'false',
			'--arrow-parens',
			'avoid',
			'--print-width',
			'80',
			'--parser',
			'typescript',
			...getPaths(include, exclude, '/*.ts')
		])
	})
}
exports.prettierTS = prettierTS
/**
 * Prettier JS
 */
function prettierJS(include = 'src', exclude = []) {
	return __awaiter(this, void 0, void 0, function*() {
		exec_1.exec('prettier', [
			'--single-quote',
			'--use-tabs',
			'--write',
			'--semi',
			'false',
			'--arrow-parens',
			'avoid',
			'--print-width',
			'80',
			...getPaths(include, exclude, '/*.js')
		])
	})
}
exports.prettierJS = prettierJS
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcmV0dGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUJBQXdCO0FBQ3hCLGlDQUE2QjtBQUU3Qjs7R0FFRztBQUNILE1BQU0sUUFBUSxHQUFHLENBQ2hCLE9BQWUsRUFDZixPQUFzQixFQUN0QixRQUFnQixFQUNBLEVBQUU7SUFDbEIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUE7SUFDakMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdkMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQy9DLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUNyRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDckIsUUFBUSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FDbEQsQ0FBQTthQUNEO1NBQ0Q7SUFDRixDQUFDLENBQUMsQ0FBQTtJQUNGLE9BQU8sTUFBTSxDQUFBO0FBQ2QsQ0FBQyxDQUFBO0FBRUQ7O0dBRUc7QUFDSCxvQkFDQyxVQUFrQixLQUFLLEVBQ3ZCLFVBQXlCLEVBQUU7O1FBRTNCLFdBQUksQ0FBQyxVQUFVLEVBQUU7WUFDaEIsZ0JBQWdCO1lBQ2hCLFlBQVk7WUFDWixTQUFTO1lBQ1QsUUFBUTtZQUNSLE9BQU87WUFDUCxnQkFBZ0I7WUFDaEIsT0FBTztZQUNQLGVBQWU7WUFDZixJQUFJO1lBQ0osVUFBVTtZQUNWLFlBQVk7WUFDWixHQUFHLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQztTQUN0QyxDQUFDLENBQUE7SUFDSCxDQUFDO0NBQUE7QUFsQkQsZ0NBa0JDO0FBRUQ7O0dBRUc7QUFDSCxvQkFDQyxVQUFrQixLQUFLLEVBQ3ZCLFVBQXlCLEVBQUU7O1FBRTNCLFdBQUksQ0FBQyxVQUFVLEVBQUU7WUFDaEIsZ0JBQWdCO1lBQ2hCLFlBQVk7WUFDWixTQUFTO1lBQ1QsUUFBUTtZQUNSLE9BQU87WUFDUCxnQkFBZ0I7WUFDaEIsT0FBTztZQUNQLGVBQWU7WUFDZixJQUFJO1lBQ0osR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUM7U0FDdEMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUFBO0FBaEJELGdDQWdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHsgZXhlYyB9IGZyb20gJy4vZXhlYydcblxuLyoqXG4gKiBHZXQgUGF0aHNcbiAqL1xuY29uc3QgZ2V0UGF0aHMgPSAoXG5cdGluY2x1ZGU6IHN0cmluZyxcblx0ZXhjbHVkZTogQXJyYXk8c3RyaW5nPixcblx0d2lsZGNhcmQ6IHN0cmluZ1xuKTogQXJyYXk8c3RyaW5nPiA9PiB7XG5cdGxldCByZXRWYWwgPSBbaW5jbHVkZSArIHdpbGRjYXJkXVxuXHRmcy5yZWFkZGlyU3luYyhpbmNsdWRlKS5mb3JFYWNoKGNoaWxkID0+IHtcblx0XHRpZiAoZXhjbHVkZS5pbmRleE9mKGluY2x1ZGUgKyAnLycgKyBjaGlsZCkgPCAwKSB7XG5cdFx0XHRpZiAoZnMuc3RhdFN5bmMoaW5jbHVkZSArICcvJyArIGNoaWxkKS5pc0RpcmVjdG9yeSgpKSB7XG5cdFx0XHRcdHJldFZhbCA9IHJldFZhbC5jb25jYXQoXG5cdFx0XHRcdFx0Z2V0UGF0aHMoaW5jbHVkZSArICcvJyArIGNoaWxkLCBleGNsdWRlLCB3aWxkY2FyZClcblx0XHRcdFx0KVxuXHRcdFx0fVxuXHRcdH1cblx0fSlcblx0cmV0dXJuIHJldFZhbFxufVxuXG4vKipcbiAqIFByZXR0aWVyXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwcmV0dGllclRTKFxuXHRpbmNsdWRlOiBzdHJpbmcgPSAnc3JjJyxcblx0ZXhjbHVkZTogQXJyYXk8c3RyaW5nPiA9IFtdXG4pIHtcblx0ZXhlYygncHJldHRpZXInLCBbXG5cdFx0Jy0tc2luZ2xlLXF1b3RlJyxcblx0XHQnLS11c2UtdGFicycsXG5cdFx0Jy0td3JpdGUnLFxuXHRcdCctLXNlbWknLFxuXHRcdCdmYWxzZScsXG5cdFx0Jy0tYXJyb3ctcGFyZW5zJyxcblx0XHQnYXZvaWQnLFxuXHRcdCctLXByaW50LXdpZHRoJyxcblx0XHQnODAnLFxuXHRcdCctLXBhcnNlcicsXG5cdFx0J3R5cGVzY3JpcHQnLFxuXHRcdC4uLmdldFBhdGhzKGluY2x1ZGUsIGV4Y2x1ZGUsICcvKi50cycpXG5cdF0pXG59XG5cbi8qKlxuICogUHJldHRpZXIgSlNcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZXR0aWVySlMoXG5cdGluY2x1ZGU6IHN0cmluZyA9ICdzcmMnLFxuXHRleGNsdWRlOiBBcnJheTxzdHJpbmc+ID0gW11cbikge1xuXHRleGVjKCdwcmV0dGllcicsIFtcblx0XHQnLS1zaW5nbGUtcXVvdGUnLFxuXHRcdCctLXVzZS10YWJzJyxcblx0XHQnLS13cml0ZScsXG5cdFx0Jy0tc2VtaScsXG5cdFx0J2ZhbHNlJyxcblx0XHQnLS1hcnJvdy1wYXJlbnMnLFxuXHRcdCdhdm9pZCcsXG5cdFx0Jy0tcHJpbnQtd2lkdGgnLFxuXHRcdCc4MCcsXG5cdFx0Li4uZ2V0UGF0aHMoaW5jbHVkZSwgZXhjbHVkZSwgJy8qLmpzJylcblx0XSlcbn1cbiJdfQ==
