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
const nodezip = require("node-zip");
const private_1 = require("./private");
/**
 * Build Utils
 */
function zip(from, to) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            if (fs.existsSync(to)) {
                fs.unlinkSync(to);
            }
            private_1.zipFolder(nodezip, fs, from, '');
            fs.writeFile(to, nodezip.generate({ base64: false, compression: 'DEFLATE' }), 'binary', err => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    });
}
exports.zip = zip;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiemlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx5QkFBd0I7QUFDeEIsb0NBQW1DO0FBQ25DLHVDQUFxQztBQUVyQzs7R0FFRztBQUNILGFBQTBCLElBQVksRUFBRSxFQUFVOztRQUNqRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3RDLElBQUksRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDdEIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQTthQUNqQjtZQUNELG1CQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUE7WUFDaEMsRUFBRSxDQUFDLFNBQVMsQ0FDWCxFQUFFLEVBQ0YsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQzNELFFBQVEsRUFDUixHQUFHLENBQUMsRUFBRTtnQkFDTCxJQUFJLEdBQUcsRUFBRTtvQkFDUixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7aUJBQ1g7cUJBQU07b0JBQ04sT0FBTyxFQUFFLENBQUE7aUJBQ1Q7WUFDRixDQUFDLENBQ0QsQ0FBQTtRQUNGLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztDQUFBO0FBbkJELGtCQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJ1xuaW1wb3J0ICogYXMgbm9kZXppcCBmcm9tICdub2RlLXppcCdcbmltcG9ydCB7IHppcEZvbGRlciB9IGZyb20gJy4vcHJpdmF0ZSdcblxuLyoqXG4gKiBCdWlsZCBVdGlsc1xuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gemlwKGZyb206IHN0cmluZywgdG86IHN0cmluZykge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGlmIChmcy5leGlzdHNTeW5jKHRvKSkge1xuXHRcdFx0ZnMudW5saW5rU3luYyh0bylcblx0XHR9XG5cdFx0emlwRm9sZGVyKG5vZGV6aXAsIGZzLCBmcm9tLCAnJylcblx0XHRmcy53cml0ZUZpbGUoXG5cdFx0XHR0byxcblx0XHRcdG5vZGV6aXAuZ2VuZXJhdGUoeyBiYXNlNjQ6IGZhbHNlLCBjb21wcmVzc2lvbjogJ0RFRkxBVEUnIH0pLFxuXHRcdFx0J2JpbmFyeScsXG5cdFx0XHRlcnIgPT4ge1xuXHRcdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdFx0cmVqZWN0KGVycilcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXNvbHZlKClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdClcblx0fSlcbn1cbiJdfQ==