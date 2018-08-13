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
/**
 * Build Utils
 */
function processPackage(process, autoUpdate = false) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            try {
                const pkg = JSON.parse(fs.readFileSync('package.json').toString());
                if (autoUpdate) {
                    let version = pkg.version.split('.');
                    version[2] = parseInt(version[2], 10) + 1;
                    pkg.version = version.join('.');
                    fs.writeFileSync('package.json', JSON.stringify(pkg, null, 4));
                }
                if (process) {
                    process(pkg);
                }
                return resolve(pkg);
            }
            catch (e) {
                console.error('Problem occurred updating package.json version number', e);
                return reject();
            }
        });
    });
}
exports.processPackage = processPackage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzc1BhY2thZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9jZXNzUGFja2FnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUJBQXdCO0FBRXhCOztHQUVHO0FBQ0gsd0JBQXFDLE9BQTJCLEVBQUUsYUFBc0IsS0FBSzs7UUFDNUYsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxJQUFJO2dCQUNILE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO2dCQUNsRSxJQUFJLFVBQVUsRUFBRTtvQkFDZixJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtvQkFDcEMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUN6QyxHQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUE7b0JBQy9CLEVBQUUsQ0FBQyxhQUFhLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO2lCQUM5RDtnQkFDRCxJQUFJLE9BQU8sRUFBRTtvQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7aUJBQ1o7Z0JBQ0QsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7YUFDbkI7WUFBQyxPQUFPLENBQUMsRUFBRTtnQkFDWCxPQUFPLENBQUMsS0FBSyxDQUFDLHVEQUF1RCxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUN6RSxPQUFPLE1BQU0sRUFBRSxDQUFBO2FBQ2Y7UUFDRixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7Q0FBQTtBQW5CRCx3Q0FtQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcydcblxuLyoqXG4gKiBCdWlsZCBVdGlsc1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc1BhY2thZ2UocHJvY2Vzcz86IChwa2c6IGFueSkgPT4gYW55LCBhdXRvVXBkYXRlOiBib29sZWFuID0gZmFsc2UpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgcGtnID0gSlNPTi5wYXJzZShmcy5yZWFkRmlsZVN5bmMoJ3BhY2thZ2UuanNvbicpLnRvU3RyaW5nKCkpXG5cdFx0XHRpZiAoYXV0b1VwZGF0ZSkge1xuXHRcdFx0XHRsZXQgdmVyc2lvbiA9IHBrZy52ZXJzaW9uLnNwbGl0KCcuJylcblx0XHRcdFx0dmVyc2lvblsyXSA9IHBhcnNlSW50KHZlcnNpb25bMl0sIDEwKSArIDFcblx0XHRcdFx0cGtnLnZlcnNpb24gPSB2ZXJzaW9uLmpvaW4oJy4nKVxuXHRcdFx0XHRmcy53cml0ZUZpbGVTeW5jKCdwYWNrYWdlLmpzb24nLCBKU09OLnN0cmluZ2lmeShwa2csIG51bGwsIDQpKVxuXHRcdFx0fVxuXHRcdFx0aWYgKHByb2Nlc3MpIHtcblx0XHRcdFx0cHJvY2Vzcyhwa2cpXG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzb2x2ZShwa2cpXG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignUHJvYmxlbSBvY2N1cnJlZCB1cGRhdGluZyBwYWNrYWdlLmpzb24gdmVyc2lvbiBudW1iZXInLCBlKVxuXHRcdFx0cmV0dXJuIHJlamVjdCgpXG5cdFx0fVxuXHR9KVxufVxuIl19