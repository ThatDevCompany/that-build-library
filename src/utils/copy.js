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
const private_1 = require("./private");
/**
 * Copy Folder
 */
function copy(from, to, filename = '') {
    return __awaiter(this, void 0, void 0, function* () {
        private_1.checkFolder(fs, to);
        if (fs.statSync(from).isDirectory()) {
            return private_1.copyFolder(fs, from, to);
        }
        else {
            return private_1.copyFile(fs, from, to + '/' + (filename || from.split('/').reverse()[0]));
        }
    });
}
exports.copy = copy;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29weS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHlCQUF3QjtBQUN4Qix1Q0FBNkQ7QUFFN0Q7O0dBRUc7QUFDSCxjQUEyQixJQUFZLEVBQUUsRUFBVSxFQUFFLFdBQW1CLEVBQUU7O1FBQ3pFLHFCQUFXLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBQ25CLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNwQyxPQUFPLG9CQUFVLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQTtTQUMvQjthQUFNO1lBQ04sT0FBTyxrQkFBUSxDQUNkLEVBQUUsRUFDRixJQUFJLEVBQ0osRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3JELENBQUE7U0FDRDtJQUNGLENBQUM7Q0FBQTtBQVhELG9CQVdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnXG5pbXBvcnQgeyBjaGVja0ZvbGRlciwgY29weUZpbGUsIGNvcHlGb2xkZXIgfSBmcm9tICcuL3ByaXZhdGUnXG5cbi8qKlxuICogQ29weSBGb2xkZXJcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvcHkoZnJvbTogc3RyaW5nLCB0bzogc3RyaW5nLCBmaWxlbmFtZTogc3RyaW5nID0gJycpIHtcblx0Y2hlY2tGb2xkZXIoZnMsIHRvKVxuXHRpZiAoZnMuc3RhdFN5bmMoZnJvbSkuaXNEaXJlY3RvcnkoKSkge1xuXHRcdHJldHVybiBjb3B5Rm9sZGVyKGZzLCBmcm9tLCB0bylcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gY29weUZpbGUoXG5cdFx0XHRmcyxcblx0XHRcdGZyb20sXG5cdFx0XHR0byArICcvJyArIChmaWxlbmFtZSB8fCBmcm9tLnNwbGl0KCcvJykucmV2ZXJzZSgpWzBdKVxuXHRcdClcblx0fVxufVxuIl19