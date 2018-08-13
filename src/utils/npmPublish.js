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
const updatePackage_1 = require('./updatePackage')
const clean_1 = require('./clean')
const exec_1 = require('./exec')
/**
 * NPM Publish
 */
function npmPublish(fld, processPackage = pkg => {}) {
	return __awaiter(this, void 0, void 0, function*() {
		// Update the package.json
		return (
			updatePackage_1
				.updatePackage(pkg => {
					// Process the contents
					processPackage(pkg)
					delete pkg.devDependencies
					// Save package.json
					fs.writeFileSync(fld + '/package.json', JSON.stringify(pkg, null, 4))
				})
				// Delete the tests
				.then(() => clean_1.clean(fld + '/*.spec.*'))
				// Run the publish
				.then(() => exec_1.exec('npm', ['publish', 'dist']))
		)
	})
}
exports.npmPublish = npmPublish
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtUHVibGlzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5wbVB1Ymxpc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlCQUF3QjtBQUN4QixtREFBK0M7QUFDL0MsbUNBQStCO0FBQy9CLGlDQUE2QjtBQUU3Qjs7R0FFRztBQUNILG9CQUNDLEdBQVcsRUFDWCxpQkFBZ0MsR0FBRyxDQUFDLEVBQUUsR0FBRSxDQUFDOztRQUV6QywwQkFBMEI7UUFDMUIsT0FBTyxDQUNOLDZCQUFhLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUMxQix1QkFBdUI7WUFDdkIsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ25CLE9BQU8sR0FBRyxDQUFDLGVBQWUsQ0FBQTtZQUUxQixvQkFBb0I7WUFDcEIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsZUFBZSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3RFLENBQUMsQ0FBQztZQUNELG1CQUFtQjthQUNsQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBSyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBQztZQUVyQyxrQkFBa0I7YUFDakIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUM5QyxDQUFBO0lBQ0YsQ0FBQztDQUFBO0FBcEJELGdDQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHsgdXBkYXRlUGFja2FnZSB9IGZyb20gJy4vdXBkYXRlUGFja2FnZSdcbmltcG9ydCB7IGNsZWFuIH0gZnJvbSAnLi9jbGVhbidcbmltcG9ydCB7IGV4ZWMgfSBmcm9tICcuL2V4ZWMnXG5cbi8qKlxuICogTlBNIFB1Ymxpc2hcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG5wbVB1Ymxpc2goXG5cdGZsZDogc3RyaW5nLFxuXHRwcm9jZXNzUGFja2FnZTogKHBrZykgPT4gdm9pZCA9IHBrZyA9PiB7fVxuKSB7XG5cdC8vIFVwZGF0ZSB0aGUgcGFja2FnZS5qc29uXG5cdHJldHVybiAoXG5cdFx0dXBkYXRlUGFja2FnZSgocGtnOiBhbnkpID0+IHtcblx0XHRcdC8vIFByb2Nlc3MgdGhlIGNvbnRlbnRzXG5cdFx0XHRwcm9jZXNzUGFja2FnZShwa2cpXG5cdFx0XHRkZWxldGUgcGtnLmRldkRlcGVuZGVuY2llc1xuXG5cdFx0XHQvLyBTYXZlIHBhY2thZ2UuanNvblxuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhmbGQgKyAnL3BhY2thZ2UuanNvbicsIEpTT04uc3RyaW5naWZ5KHBrZywgbnVsbCwgNCkpXG5cdFx0fSlcblx0XHRcdC8vIERlbGV0ZSB0aGUgdGVzdHNcblx0XHRcdC50aGVuKCgpID0+IGNsZWFuKGZsZCArICcvKi5zcGVjLionKSlcblxuXHRcdFx0Ly8gUnVuIHRoZSBwdWJsaXNoXG5cdFx0XHQudGhlbigoKSA9PiBleGVjKCducG0nLCBbJ3B1Ymxpc2gnLCAnZGlzdCddKSlcblx0KVxufVxuIl19
