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
const processPackage_1 = require("./processPackage");
const clean_1 = require("./clean");
const exec_1 = require("./exec");
/**
 * NPM Publish
 */
function npmPublish(fld, process = pkg => { }) {
    return __awaiter(this, void 0, void 0, function* () {
        // Update the package.json
        yield processPackage_1.processPackage((pkg) => {
            // Process the contents
            process(pkg);
            delete pkg.devDependencies;
            // Save package.json
            fs.writeFileSync(fld + '/package.json', JSON.stringify(pkg, null, 4));
        }, true);
        // Delete the tests
        yield clean_1.clean(fld + '/*.spec.*');
        // Run the publish
        yield exec_1.exec('npm', ['publish', 'dist']);
        return Promise.resolve();
    });
}
exports.npmPublish = npmPublish;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtUHVibGlzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5wbVB1Ymxpc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlCQUF3QjtBQUN4QixxREFBaUQ7QUFDakQsbUNBQStCO0FBQy9CLGlDQUE2QjtBQUU3Qjs7R0FFRztBQUNILG9CQUNDLEdBQVcsRUFDWCxVQUF5QixHQUFHLENBQUMsRUFBRSxHQUFFLENBQUM7O1FBRWxDLDBCQUEwQjtRQUMxQixNQUFNLCtCQUFjLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNqQyx1QkFBdUI7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ1osT0FBTyxHQUFHLENBQUMsZUFBZSxDQUFBO1lBRTFCLG9CQUFvQjtZQUNwQixFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDdEUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRVIsbUJBQW1CO1FBQ25CLE1BQU0sYUFBSyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBQTtRQUU5QixrQkFBa0I7UUFDbEIsTUFBTSxXQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7UUFFdEMsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUE7SUFDekIsQ0FBQztDQUFBO0FBckJELGdDQXFCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHsgcHJvY2Vzc1BhY2thZ2UgfSBmcm9tICcuL3Byb2Nlc3NQYWNrYWdlJ1xuaW1wb3J0IHsgY2xlYW4gfSBmcm9tICcuL2NsZWFuJ1xuaW1wb3J0IHsgZXhlYyB9IGZyb20gJy4vZXhlYydcblxuLyoqXG4gKiBOUE0gUHVibGlzaFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbnBtUHVibGlzaChcblx0ZmxkOiBzdHJpbmcsXG5cdHByb2Nlc3M6IChwa2cpID0+IHZvaWQgPSBwa2cgPT4ge31cbikge1xuXHQvLyBVcGRhdGUgdGhlIHBhY2thZ2UuanNvblxuXHRhd2FpdCBwcm9jZXNzUGFja2FnZSgocGtnOiBhbnkpID0+IHtcblx0XHQvLyBQcm9jZXNzIHRoZSBjb250ZW50c1xuXHRcdHByb2Nlc3MocGtnKVxuXHRcdGRlbGV0ZSBwa2cuZGV2RGVwZW5kZW5jaWVzXG5cblx0XHQvLyBTYXZlIHBhY2thZ2UuanNvblxuXHRcdGZzLndyaXRlRmlsZVN5bmMoZmxkICsgJy9wYWNrYWdlLmpzb24nLCBKU09OLnN0cmluZ2lmeShwa2csIG51bGwsIDQpKVxuXHR9LCB0cnVlKVxuXG5cdC8vIERlbGV0ZSB0aGUgdGVzdHNcblx0YXdhaXQgY2xlYW4oZmxkICsgJy8qLnNwZWMuKicpXG5cblx0Ly8gUnVuIHRoZSBwdWJsaXNoXG5cdGF3YWl0IGV4ZWMoJ25wbScsIFsncHVibGlzaCcsICdkaXN0J10pXG5cblx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG59XG4iXX0=