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
const exec_1 = require('./exec')
/**
 * TSC
 */
function tsc(config = './tsconfig.json') {
	return __awaiter(this, void 0, void 0, function*() {
		return exec_1.exec('tsc', ['-p', config])
	})
}
exports.tsc = tsc
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHNjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHNjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpQ0FBNkI7QUFFN0I7O0dBRUc7QUFDSCxhQUEwQixTQUFpQixpQkFBaUI7O1FBQzNELE9BQU8sV0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO0lBQ25DLENBQUM7Q0FBQTtBQUZELGtCQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXhlYyB9IGZyb20gJy4vZXhlYydcblxuLyoqXG4gKiBUU0NcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRzYyhjb25maWc6IHN0cmluZyA9ICcuL3RzY29uZmlnLmpzb24nKSB7XG5cdHJldHVybiBleGVjKCd0c2MnLCBbJy1wJywgY29uZmlnXSlcbn1cbiJdfQ==
