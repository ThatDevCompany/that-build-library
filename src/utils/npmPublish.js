"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const clean_1 = require("./clean");
const exec_1 = require("./exec");
/**
 * NPM Publish
 */
function npmPublish(fld, processPackage = pkg => { }) {
    return __awaiter(this, void 0, void 0, function* () {
        // Update the package.json
        yield processPackage((pkg) => {
            // Process the contents
            processPackage(pkg);
            delete pkg.devDependencies;
            // Save package.json
            fs.writeFileSync(fld + '/package.json', JSON.stringify(pkg, null, 4));
        });
        // Delete the tests
        yield clean_1.clean(fld + '/*.spec.*');
        // Run the publish
        yield exec_1.exec('npm', ['publish', 'dist']);
        return Promise.resolve();
    });
}
exports.npmPublish = npmPublish;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtUHVibGlzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5wbVB1Ymxpc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlCQUF3QjtBQUV4QixtQ0FBK0I7QUFDL0IsaUNBQTZCO0FBRTdCOztHQUVHO0FBQ0gsb0JBQ0MsR0FBVyxFQUNYLGlCQUFnQyxHQUFHLENBQUMsRUFBRSxHQUFFLENBQUM7O1FBRXpDLDBCQUEwQjtRQUMxQixNQUFNLGNBQWMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO1lBQ2pDLHVCQUF1QjtZQUN2QixjQUFjLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbkIsT0FBTyxHQUFHLENBQUMsZUFBZSxDQUFBO1lBRTFCLG9CQUFvQjtZQUNwQixFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEUsQ0FBQyxDQUFDLENBQUE7UUFFRixtQkFBbUI7UUFDbkIsTUFBTSxhQUFLLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxDQUFBO1FBRTlCLGtCQUFrQjtRQUNsQixNQUFNLFdBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUV0QyxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0NBQUE7QUFyQkQsZ0NBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnXG5pbXBvcnQgeyBwcm9jZXNzUGFja2FnZSB9IGZyb20gJy4vcHJvY2Vzc1BhY2thZ2UnXG5pbXBvcnQgeyBjbGVhbiB9IGZyb20gJy4vY2xlYW4nXG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnLi9leGVjJ1xuXG4vKipcbiAqIE5QTSBQdWJsaXNoXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBucG1QdWJsaXNoKFxuXHRmbGQ6IHN0cmluZyxcblx0cHJvY2Vzc1BhY2thZ2U6IChwa2cpID0+IHZvaWQgPSBwa2cgPT4ge31cbikge1xuXHQvLyBVcGRhdGUgdGhlIHBhY2thZ2UuanNvblxuXHRhd2FpdCBwcm9jZXNzUGFja2FnZSgocGtnOiBhbnkpID0+IHtcblx0XHQvLyBQcm9jZXNzIHRoZSBjb250ZW50c1xuXHRcdHByb2Nlc3NQYWNrYWdlKHBrZylcblx0XHRkZWxldGUgcGtnLmRldkRlcGVuZGVuY2llc1xuXG5cdFx0Ly8gU2F2ZSBwYWNrYWdlLmpzb25cblx0XHRmcy53cml0ZUZpbGVTeW5jKGZsZCArICcvcGFja2FnZS5qc29uJywgSlNPTi5zdHJpbmdpZnkocGtnLCBudWxsLCA0KSlcblx0fSlcblxuXHQvLyBEZWxldGUgdGhlIHRlc3RzXG5cdGF3YWl0IGNsZWFuKGZsZCArICcvKi5zcGVjLionKVxuXG5cdC8vIFJ1biB0aGUgcHVibGlzaFxuXHRhd2FpdCBleGVjKCducG0nLCBbJ3B1Ymxpc2gnLCAnZGlzdCddKVxuXG5cdHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxufVxuIl19