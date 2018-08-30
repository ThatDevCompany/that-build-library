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
		return exec_1.exec('prettier', [
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
		return exec_1.exec('prettier', [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcmV0dGllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUJBQXdCO0FBQ3hCLGlDQUE2QjtBQUU3Qjs7R0FFRztBQUNILE1BQU0sUUFBUSxHQUFHLENBQ2hCLE9BQWUsRUFDZixPQUFzQixFQUN0QixRQUFnQixFQUNBLEVBQUU7SUFDbEIsSUFBSSxNQUFNLEdBQUcsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQUE7SUFDakMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDdkMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQy9DLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFO2dCQUNyRCxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDckIsUUFBUSxDQUFDLE9BQU8sR0FBRyxHQUFHLEdBQUcsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FDbEQsQ0FBQTthQUNEO1NBQ0Q7SUFDRixDQUFDLENBQUMsQ0FBQTtJQUNGLE9BQU8sTUFBTSxDQUFBO0FBQ2QsQ0FBQyxDQUFBO0FBRUQ7O0dBRUc7QUFDSCxvQkFDQyxVQUFrQixLQUFLLEVBQ3ZCLFVBQXlCLEVBQUU7O1FBRTNCLE9BQU8sV0FBSSxDQUFDLFVBQVUsRUFBRTtZQUN2QixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLFNBQVM7WUFDVCxRQUFRO1lBQ1IsT0FBTztZQUNQLGdCQUFnQjtZQUNoQixPQUFPO1lBQ1AsZUFBZTtZQUNmLElBQUk7WUFDSixVQUFVO1lBQ1YsWUFBWTtZQUNaLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO1NBQ3RDLENBQUMsQ0FBQTtJQUNILENBQUM7Q0FBQTtBQWxCRCxnQ0FrQkM7QUFFRDs7R0FFRztBQUNILG9CQUNDLFVBQWtCLEtBQUssRUFDdkIsVUFBeUIsRUFBRTs7UUFFM0IsT0FBTyxXQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osU0FBUztZQUNULFFBQVE7WUFDUixPQUFPO1lBQ1AsZ0JBQWdCO1lBQ2hCLE9BQU87WUFDUCxlQUFlO1lBQ2YsSUFBSTtZQUNKLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDO1NBQ3RDLENBQUMsQ0FBQTtJQUNILENBQUM7Q0FBQTtBQWhCRCxnQ0FnQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcydcbmltcG9ydCB7IGV4ZWMgfSBmcm9tICcuL2V4ZWMnXG5cbi8qKlxuICogR2V0IFBhdGhzXG4gKi9cbmNvbnN0IGdldFBhdGhzID0gKFxuXHRpbmNsdWRlOiBzdHJpbmcsXG5cdGV4Y2x1ZGU6IEFycmF5PHN0cmluZz4sXG5cdHdpbGRjYXJkOiBzdHJpbmdcbik6IEFycmF5PHN0cmluZz4gPT4ge1xuXHRsZXQgcmV0VmFsID0gW2luY2x1ZGUgKyB3aWxkY2FyZF1cblx0ZnMucmVhZGRpclN5bmMoaW5jbHVkZSkuZm9yRWFjaChjaGlsZCA9PiB7XG5cdFx0aWYgKGV4Y2x1ZGUuaW5kZXhPZihpbmNsdWRlICsgJy8nICsgY2hpbGQpIDwgMCkge1xuXHRcdFx0aWYgKGZzLnN0YXRTeW5jKGluY2x1ZGUgKyAnLycgKyBjaGlsZCkuaXNEaXJlY3RvcnkoKSkge1xuXHRcdFx0XHRyZXRWYWwgPSByZXRWYWwuY29uY2F0KFxuXHRcdFx0XHRcdGdldFBhdGhzKGluY2x1ZGUgKyAnLycgKyBjaGlsZCwgZXhjbHVkZSwgd2lsZGNhcmQpXG5cdFx0XHRcdClcblx0XHRcdH1cblx0XHR9XG5cdH0pXG5cdHJldHVybiByZXRWYWxcbn1cblxuLyoqXG4gKiBQcmV0dGllclxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJldHRpZXJUUyhcblx0aW5jbHVkZTogc3RyaW5nID0gJ3NyYycsXG5cdGV4Y2x1ZGU6IEFycmF5PHN0cmluZz4gPSBbXVxuKSB7XG5cdHJldHVybiBleGVjKCdwcmV0dGllcicsIFtcblx0XHQnLS1zaW5nbGUtcXVvdGUnLFxuXHRcdCctLXVzZS10YWJzJyxcblx0XHQnLS13cml0ZScsXG5cdFx0Jy0tc2VtaScsXG5cdFx0J2ZhbHNlJyxcblx0XHQnLS1hcnJvdy1wYXJlbnMnLFxuXHRcdCdhdm9pZCcsXG5cdFx0Jy0tcHJpbnQtd2lkdGgnLFxuXHRcdCc4MCcsXG5cdFx0Jy0tcGFyc2VyJyxcblx0XHQndHlwZXNjcmlwdCcsXG5cdFx0Li4uZ2V0UGF0aHMoaW5jbHVkZSwgZXhjbHVkZSwgJy8qLnRzJylcblx0XSlcbn1cblxuLyoqXG4gKiBQcmV0dGllciBKU1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJldHRpZXJKUyhcblx0aW5jbHVkZTogc3RyaW5nID0gJ3NyYycsXG5cdGV4Y2x1ZGU6IEFycmF5PHN0cmluZz4gPSBbXVxuKSB7XG5cdHJldHVybiBleGVjKCdwcmV0dGllcicsIFtcblx0XHQnLS1zaW5nbGUtcXVvdGUnLFxuXHRcdCctLXVzZS10YWJzJyxcblx0XHQnLS13cml0ZScsXG5cdFx0Jy0tc2VtaScsXG5cdFx0J2ZhbHNlJyxcblx0XHQnLS1hcnJvdy1wYXJlbnMnLFxuXHRcdCdhdm9pZCcsXG5cdFx0Jy0tcHJpbnQtd2lkdGgnLFxuXHRcdCc4MCcsXG5cdFx0Li4uZ2V0UGF0aHMoaW5jbHVkZSwgZXhjbHVkZSwgJy8qLmpzJylcblx0XSlcbn1cbiJdfQ==
