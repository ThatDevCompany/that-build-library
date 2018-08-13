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
        return (processPackage((pkg) => {
            // Process the contents
            processPackage(pkg);
            delete pkg.devDependencies;
            // Save package.json
            fs.writeFileSync(fld + '/package.json', JSON.stringify(pkg, null, 4));
        })
            // Delete the tests
            .then(() => clean_1.clean(fld + '/*.spec.*'))
            // Run the publish
            .then(() => exec_1.exec('npm', ['publish', 'dist'])));
    });
}
exports.npmPublish = npmPublish;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtUHVibGlzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5wbVB1Ymxpc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlCQUF3QjtBQUV4QixtQ0FBK0I7QUFDL0IsaUNBQTZCO0FBRTdCOztHQUVHO0FBQ0gsb0JBQ0MsR0FBVyxFQUNYLGlCQUFnQyxHQUFHLENBQUMsRUFBRSxHQUFFLENBQUM7O1FBRXpDLDBCQUEwQjtRQUMxQixPQUFPLENBQ04sY0FBYyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDM0IsdUJBQXVCO1lBQ3ZCLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNuQixPQUFPLEdBQUcsQ0FBQyxlQUFlLENBQUE7WUFFMUIsb0JBQW9CO1lBQ3BCLEVBQUUsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0RSxDQUFDLENBQUM7WUFDRCxtQkFBbUI7YUFDbEIsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLGFBQUssQ0FBQyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUM7WUFFckMsa0JBQWtCO2FBQ2pCLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FDOUMsQ0FBQTtJQUNGLENBQUM7Q0FBQTtBQXBCRCxnQ0FvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcydcbmltcG9ydCB7IHByb2Nlc3NQYWNrYWdlIH0gZnJvbSAnLi91cGRhdGVQYWNrYWdlJ1xuaW1wb3J0IHsgY2xlYW4gfSBmcm9tICcuL2NsZWFuJ1xuaW1wb3J0IHsgZXhlYyB9IGZyb20gJy4vZXhlYydcblxuLyoqXG4gKiBOUE0gUHVibGlzaFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbnBtUHVibGlzaChcblx0ZmxkOiBzdHJpbmcsXG5cdHByb2Nlc3NQYWNrYWdlOiAocGtnKSA9PiB2b2lkID0gcGtnID0+IHt9XG4pIHtcblx0Ly8gVXBkYXRlIHRoZSBwYWNrYWdlLmpzb25cblx0cmV0dXJuIChcblx0XHRwcm9jZXNzUGFja2FnZSgocGtnOiBhbnkpID0+IHtcblx0XHRcdC8vIFByb2Nlc3MgdGhlIGNvbnRlbnRzXG5cdFx0XHRwcm9jZXNzUGFja2FnZShwa2cpXG5cdFx0XHRkZWxldGUgcGtnLmRldkRlcGVuZGVuY2llc1xuXG5cdFx0XHQvLyBTYXZlIHBhY2thZ2UuanNvblxuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyhmbGQgKyAnL3BhY2thZ2UuanNvbicsIEpTT04uc3RyaW5naWZ5KHBrZywgbnVsbCwgNCkpXG5cdFx0fSlcblx0XHRcdC8vIERlbGV0ZSB0aGUgdGVzdHNcblx0XHRcdC50aGVuKCgpID0+IGNsZWFuKGZsZCArICcvKi5zcGVjLionKSlcblxuXHRcdFx0Ly8gUnVuIHRoZSBwdWJsaXNoXG5cdFx0XHQudGhlbigoKSA9PiBleGVjKCducG0nLCBbJ3B1Ymxpc2gnLCAnZGlzdCddKSlcblx0KVxufVxuIl19